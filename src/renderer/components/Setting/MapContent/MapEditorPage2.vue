<template>
  <main class="setting-map map-content-editor">
    <div class="map-editor-title mx-3 row align-items-center">
      <a href="#/setting/mapContent" class="mr-3">
        <span class="icon mx-2"><i class="oi oi-chevron-left"></i></span>
        <span class="title">AB-3樓 編輯地圖2</span>
      </a>
      <b-button class="button-circle mt-2" variant="outline-secondary"><i class="oi oi-spreadsheet"></i></b-button>
    </div>
    <div class="map-editor-content">
      <div class="map-editor-pic">
        <img ref="imgMap" style="z-index:-1;position:absolute;" width='100%' @load="loaded()" src='http://ta001.pgs.ichenparking.com.tw:8830/maps/1534270432211.jpeg'/>
          <svg :width="canvasWidth" :height="canvasHeight" @load="onDraggable($event)" @click="addPointEvent($event)">
            <circle v-for="(point, index) in pointsData" v-bind:key="point.key" r="10" stroke="black" stroke-width="0" fill="red"
              :cx="point.coordinateX" 
              :cy="point.coordinateY"
              @mousedown="setSelectedEvent(point, index, $event)"
              @click="showPointDetailEvent($event)"
              @contextmenu="showContextMenu($event)">
            </circle>
          </svg>
        <ul id="context-menu" v-if="isShowContextMenu"
          v-bind:style="{ position: 'absolute', left: menuX + 'px', top: menuY + 'px', display: 'inline-block' }">
          <li class="context-menu-item">
            設置裝置
          </li>
          <li class="context-menu-item">
            刪除裝置
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import draggable from 'vuedraggable';
export default {
  data() {
    return {
      /* eslint object-curly-newline: ["error", { "multiline": true }] */
      pointsData: [
        // { id: 1561096685211, coordinateX: 50.62, coordinateY: 50.44, spaceId: 123 },
        // { id: 1561096685212, perX: 7.62, perY: 70.80, spaceId: 124 },
        // { id: 1561096685213, perX: 80.70, perY: 80.80, spaceId: 126 },
        // { id: 1561096685214, perX: 76.07, perY: 10.17, spaceId: 127 },
        // 1600 918
        { id: 1561096685212, coordinateX: 12, coordinateY: 12, spaceId: 124 },
        { id: 1561096685213, coordinateX: 1277, coordinateY: 829, spaceId: 126 },
        { id: 1561096685214, coordinateX: 1204, coordinateY: 104, spaceId: 127 },
      ],
      spacesData: [
        { id: 123, plateNo: 'ABC-123', spaceName: 'B3-123' },
        { id: 124, plateNo: 'EEE-4678', spaceName: 'B3-124', type: 'default', group: 'default', state: 'Green', enterTime: '11:09:48', stayTime: '00:34.38', img: '' },
        { id: 126, plateNo: '', spaceName: 'B3-125' },
      ],
      canvasWidth: 0,
      canvasHeight: 0,
      selectedPoint: {},
      selectedIndex: 0,
      isShowContextMenu: false,
      menuX: 0,
      menuY: 0,
    };
  },
  components: { draggable },
  methods: {
    onDraggable(event) {
      const svg = event.target;
      svg.addEventListener('mousemove', (event) => {
        console.log(event);
        console.log(event.x);
        console.log(event.y);
        if (this.selectedPoint) {
          this.selectedPoint.coordinateX = event.offsetX;
          this.selectedPoint.coordinateY = event.offsetY;
        }
      });
      svg.addEventListener('mouseup', () => {
        this.selectedPoint = {};
        this.selectedPoint = 0;
      });
      event.stopPropagation();
    },
    setSelectedEvent(point, index) {
      this.selectedPoint = point;
      this.selectedIndex = index;
    },
    showPointDetailEvent(event) {
      event.stopPropagation();
    },
    addPointEvent(event) {
      this.isShowContextMenu = false;
      const newPointId = new Date().getTime();
      this.pointsData.push({
        id: newPointId,
        coordinateX: event.offsetX,
        coordinateY: event.offsetY,
      });
    },
    showContextMenu(point, index, event) {
      this.selectedPoint = point;
      this.selectedIndex = index;
      this.isShowContextMenu = true;
      this.menuX = event.offsetX;
      this.menuY = event.offsetY;
      event.preventDefault();
    },
    loaded() {
      this.canvasWidth = this.$refs.imgMap.clientWidth;
      this.canvasHeight = this.$refs.imgMap.clientHeight;
      console.log(this.canvasWidth);
      console.log(this.canvasHeight);
    },
  },
};
</script>

<style>
.editor-sidebar-goback a{
    color: rgb(149, 149, 149);
    font-size: 2rem;
    display: block;
    border-bottom: solid 0.8px rgb(149, 149, 149);
    padding-bottom: 15px;
}
.editor-sidebar-goback a:hover{
    color: rgb(49, 49, 49);
    text-decoration: none;
}
</style>
