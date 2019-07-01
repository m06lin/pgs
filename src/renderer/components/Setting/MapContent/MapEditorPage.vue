<template>
  <main class="setting-map map-content-editor">
    <div class="map-editor-title mx-3 row align-items-center">
      <a href="#/setting/mapContent" class="mr-3">
        <span class="icon mx-2"><i class="oi oi-chevron-left"></i></span>
        <span class="title">AB-3樓 編輯地圖</span>
      </a>
      <b-button class="button-circle mt-2" variant="outline-secondary"><i class="oi oi-spreadsheet"></i></b-button>
    </div>
    <div class="map-editor-content">
      <div class="map-editor-pic">
        <svg style="position:absolute"></svg>
        <img ref="imgMap" class="w-100" @load="imgLoaded()" src='http://ta001.pgs.ichenparking.com.tw:8830/maps/1534270432211.jpeg'/>
        
        <ul id="context-menu" v-if="isShowContextMenu">
          <li class="context-menu-item" v-b-modal.modal-edit-point>
            設置裝置
          </li>
          <li class="context-menu-item" @click="deletePointEvent()">
            刪除裝置
          </li>
        </ul>
      </div>
    </div>

  <b-modal id="modal-edit-point" ref="editPointModal" title="修改" hide-footer>
    <form ref="form">
      <!-- name -->
      <b-form-group label="名稱" class="mb-2">
        <b-input variant="outline-secondary" v-model="selectedPoint.spaceId"/>
      </b-form-group>
      <!-- Button -->
      <b-form-group class="text-right">
        <b-button variant="secondary" @click="$refs.editPointModal.hide()">關閉</b-button>
        <b-button variant="primary" @click="eidtPointEvent()">確定</b-button>
    </b-form-group>
    </form>
  </b-modal>

  <b-modal id="modal-show-space" ref="showSpaceModal" size="lg" title="車位資訊">
      <b-row>
        <b-col md="8" class="row align-items-center p-3">
          <b-img center height="450px" v-if="selectedPoint.img" :src="selectedPoint.img" alt="space image"></b-img>
          <h3 class="m-auto" v-if="!selectedPoint.img">No Image</h3>
        </b-col>
        <b-col md="4" class="row align-items-center">
          <b-row class="mb-2">
            <label class="col-5">車牌</label>
            <b-input class="col-7" type="text" variant="outline-secondary" v-model="selectedPoint.plateNo" disabled/>
          </b-row>
          <b-row class="mb-2">
            <label class="col-5">車位號碼</label>
            <b-input class="col-7" type="text" variant="outline-secondary" v-model="selectedPoint.spaceName" disabled/>
          </b-row>
          <b-row class="mb-2">
            <label class="col-5">車位種類</label>
            <b-input class="col-7" type="text" variant="outline-secondary" v-model="selectedPoint.type" disabled/>
          </b-row>
          <b-row class="mb-2">
            <label class="col-5">車位群組</label>
            <b-input class="col-7" type="text" variant="outline-secondary" v-model="selectedPoint.group" disabled/>
          </b-row>
          <b-row class="mb-2">
            <label class="col-5">車位狀態</label>
            <b-input class="col-7" type="text" variant="outline-secondary" v-model="selectedPoint.state" disabled/>
          </b-row>
          <b-row class="mb-2">
            <label class="col-5">入場時間</label>
            <b-input class="col-7" type="text" variant="outline-secondary" v-model="selectedPoint.enterTime" disabled/>
          </b-row>
          <b-row class="mb-2">
            <label class="col-5">停留時間</label>
            <b-input class="col-7" type="text" variant="outline-secondary" v-model="selectedPoint.stayTime" disabled/>
          </b-row>
        </b-col>
      </b-row>
    <!-- footer -->
    <div slot="modal-footer" class="w-100 text-right">
      <b-button variant="secondary" @click="findPointPositionEvent(selectedPoint)">導引</b-button>
      <b-button variant="secondary" @click="$refs.showSpaceModal.hide()">關閉</b-button>
    </div>
  </b-modal>

  </main>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import * as d3 from 'd3';
import ContextMenu from '../../Modal/Menu';

export default {
  components: { ContextMenu },
  data() {
    return {
      /* eslint object-curly-newline: ["error", { "multiline": true }] */
      pointsData: [
        { id: 1561096685211, xScale: 0.5062, yScale: 0.5044, spaceId: 123 },
        { id: 1561096685212, xScale: 0.0762, yScale: 0.7080, spaceId: 124 },
        { id: 1561096685213, xScale: 0.8070, yScale: 0.8080, spaceId: 126 },
        { id: 1561096685214, xScale: 0.7607, yScale: 0.1017, spaceId: 127 },
        // 1600 918
        // { id: 1561096685212, x: 122, y: 650, spaceId: 124 },
        // { id: 1561096685213, x: 300, y: 150, spaceId: 126 },
        // { id: 1561096685214, x: 200, y: 200, spaceId: 127 },
      ],
      spacesData: [
        { id: 123, plateNo: 'ABC-123', spaceName: 'B3-123' },
        { id: 124, plateNo: 'EEE-4678', spaceName: 'B3-124', type: 'default', group: 'default', state: 'Green', enterTime: '11:09:48', stayTime: '00:34.38', img: '' },
        { id: 126, plateNo: '', spaceName: 'B3-125' },
      ],
      onDraggable: d3.drag(),
      canvasSvg: {},
      canvasWidth: 0,
      canvasHeight: 0,
      selectedPoint: {},
      selectedIndex: 0,
      isShowContextMenu: false,
    };
  },
  mounted() {
    // point drag event
    this.onDraggable
      .on('start', (d, i, a) => this.onDragStart(d, i, a))
      .on('drag', (d, i, a) => this.onDragging(d, i, a))
      .on('end', (d, i, a) => this.onDragEnd(d, i, a));
  },
  methods: {
    onDragStart(data, index, all) {
      d3.select(all[index]).attr('r', 10);
    },
    onDragging(data, index, all) {
      const positionX = Math.max(0, Math.min(this.canvasWidth, d3.event.x));
      const positionY = Math.max(0, Math.min(this.canvasHeight, d3.event.y));

      d3.select(all[index])
        .attr('cx', positionX)
        .attr('cy', positionY);
    },
    onDragEnd(data, index, all) {
      const dragPoint = d3.select(all[index]);

      this.pointsData[index].xScale = dragPoint.attr('cx') / this.canvasWidth;
      this.pointsData[index].yScale = dragPoint.attr('cy') / this.canvasHeight;
      dragPoint.attr('fill', (d, i, a) => this.setPointColor(d, i, a));
    },
    imgLoaded() {
      this.canvasWidth = this.$refs.imgMap.clientWidth;
      this.canvasHeight = this.$refs.imgMap.clientHeight;
      this.canvasSvg = d3.select('.map-editor-pic > svg')
        .attr('width', `${this.canvasWidth}px`)
        .attr('height', `${this.canvasHeight}px`)
        .on('click', () => {
          this.addPointEvent();
        });
      this.svgRedrawEvent();
    },
    svgRedrawEvent() {
      const updatePointsData = this.canvasSvg.selectAll('circle').data(this.pointsData);
      // Update View Point
      updatePointsData
        .attr('cx', d => (d.xScale * this.canvasWidth))
        .attr('cy', d => (d.yScale * this.canvasHeight));
      // Remove View Point
      updatePointsData
        .exit().remove();
      // Create View Point
      updatePointsData
        .enter()
        .append('circle')
        .attr('cx', d => d.xScale * this.canvasWidth)
        .attr('cy', d => d.yScale * this.canvasHeight)
        .attr('r', 10)
        .attr('stroke', (d, i, a) => this.setPointStroke(d, i, a))
        .attr('stroke-width', 3)
        .attr('fill', (d, i, a) => this.setPointColor(d, i, a))
        .call(this.onDraggable)
        .on('mousemove', (d, i, a) => {
          d3.select(a[i]).attr('r', 15).style('cursor', 'pointer');
        })
        .on('mouseleave', (d, i, a) => {
          d3.select(a[i]).attr('r', 10);
        })
        .on('click', (d) => {
          this.$refs.showSpaceModal.show();
          this.selectedPoint = this.spacesData.find(x => x.id === d.spaceId) || {};
          d3.event.stopPropagation();
          this.isShowContextMenu = true;
        })
        .on('contextmenu', (d, i) => {
          this.showContextMenuEvent(d, i);
          d3.event.preventDefault();
        });
    },
    addPointEvent() {
      const newPointId = new Date().getTime();
      this.pointsData.push({
        id: newPointId,
        xScale: d3.event.offsetX / this.canvasWidth,
        yScale: d3.event.offsetY / this.canvasHeight,
      });
      this.isShowContextMenu = false;
      this.svgRedrawEvent();
    },
    eidtPointEvent() {
      this.pointsData[this.selectedIndex] = { ...this.selectedPoint };
      this.$refs.editPointModal.hide();
      this.svgRedrawEvent();
    },
    deletePointEvent() {
      this.pointsData.splice(this.selectedIndex, 1);
      this.svgRedrawEvent();
    },
    showContextMenuEvent(data, index) {
      this.selectedPoint = { ...data };
      this.selectedIndex = index;

      const menu = d3.select('#context-menu');

      menu.style('position', 'absolute')
        .style('left', `${d3.event.offsetX}px`)
        .style('top', `${d3.event.offsetY}px`)
        .style('display', 'inline-block')
        .on('click', () => {
          this.isShowContextMenu = false;
        });
    },
    findPointPositionEvent() {
      console.log(this.selectedPoint.id);
    },
    setPointColor(data, index, all) {
      let color = '';
      d3.select(all[index])
        .attr('fill', () => {
          if (!data.spaceId) {
            color = 'gray';
          }
          color = 'red';
        });
      return color;
    },
    setPointStroke(data, index, all) {
      let color = '';
      d3.select(all[index])
        .attr('stroke', () => {
          if (true) {
            color = '#0000ff';
          }
        });
      return color;
    },
  },
};
</script>

<style>
.svg{
  margin: 25px;
  fill: none;
  stroke: #76BF8A;
  stroke-width: 3px;
}
#context-menu {
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  display: none;
  list-style: none;
  position: absolute;
  z-index: 2147483647;
  background-color: white;
  border: 1px solid #ebebeb;
  border-bottom-width: 0px;
}

#context-menu.active {
  display: block;
}
.context-menu-item {
  display: flex;
  cursor: pointer;
  padding: 8px 15px;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
}

.context-menu-item:hover {
  background-color: #ebebeb;
}

/* public with MapContentPage. AreaEditorPage */
.setting-map .icon{
  font-size: 1.5rem;
}
.setting-map .title{
  font-size: 2rem;
}
/* public with AreaEditorPage */
.map-content-editor a{
  color: rgb(49, 49, 49);
  text-decoration: none;
  display: block;
}

/* private */
.map-editor-title{
  height: 10%;
  border-bottom: solid 2px rgb(161, 161, 161);
  font-size: 1.5rem;
}
.map-editor-content{
  height: 90%;
  position: relative;
  /* background-image: url('https://tw-aed.mohw.gov.tw/UploadFile/20170703031250796.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
}
.map-editor-pic{
  overflow-x: auto; 
  position: absolute; 
  top: 0; right:0; bottom: 0; left: 0;
  /* background-image: url('https://tw-aed.mohw.gov.tw/UploadFile/20170703031250796.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
}
</style>
