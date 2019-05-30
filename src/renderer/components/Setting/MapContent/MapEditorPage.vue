<template>
  <main class="setting-map map-content-editor">
    <div class="map-editor-title mx-3 row align-items-center">
      <a href="#/setting/mapContent" class="mr-3">
        <span class="icon mx-2"><i class="oi oi-chevron-left"></i></span>
        <span class="title">AB-3樓 編輯地圖</span>
      </a>
      <b-button class="button-circle mt-2" variant="outline-secondary"><i class="oi oi-spreadsheet"></i></b-button>
    </div>
    <div class="map-editor-pic" @click="addpointEvent">
      <div class="map-editor-point" v-bind:style="{ left: itemSum, top: itemSum }"  v-for="item in items" :key="item.key"></div>
    </div>

  </main>
</template>

<script>

export default {
  data() {
    return {
      itemSum: 0,
      items: [],
    };
  },
  methods: {
    addpointEvent(event) {
      console.log(event.offsetY);
      console.log(event.offsetX);
      this.items.push({
        positionX: event.offsetX,
        positionY: event.offsetY,
      });
      this.itemSum += 1;
    },
  },
  components: {
  },
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
.map-editor-pic{
  height: 90%;
  background-image: url('https://tw-aed.mohw.gov.tw/UploadFile/20170703031250796.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.map-editor-point{
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  position: relative;
}


</style>
