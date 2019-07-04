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
      <map-editor :map="mapData" :isEditor="isEditor"></map-editor>
    </div>

  </main>
</template>

<script>
import MapEditor from '../../Modal/Map';
export default {
  components: { MapEditor },
  data() {
    return {
      isEditor: true,
      mapData: {
        id: 100,
        name: 'AB樓_B1',
        image: 'https://tw-aed.mohw.gov.tw/UploadFile/20170703031250796.jpg',
      },
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
      selectedPoint: {},
      selectedIndex: 0,
    };
  },
  mounted() {
  },
  methods: {},
};
</script>

<style>

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
</style>
