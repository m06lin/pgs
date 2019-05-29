<template>
  <main class="map-editor">
    <div class="map-editor-nav mx-3 row align-items-center">
      <a href="#/setting/mapContent" class="mr-3">
        <span class="icon mx-2"><i class="oi oi-chevron-left"></i></span>
        <span class="title">AB-3樓 編輯地圖</span>
      </a>
      <b-button class="button-circle mt-2" variant="outline-secondary"><i class="oi oi-spreadsheet"></i></b-button>
    </div>

    <div class="map-editor-pic">
      <img usemap="#editMap" @click="addpointEvent" src="https://tw-aed.mohw.gov.tw/UploadFile/20170703031250796.jpg">
      
      <map name="editMap">
        <component :is="item.component" :positionX="item.positionX" :positionY="item.positionY" v-for="item in items" v-bind:key="item.key"></component>
      </map>
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
        component: 'areaComponent',
        id: this.itemSum,
        positionX: event.offsetX,
        positionY: event.offsetY,
      });
      this.itemSum += 1;
    },
  },
  components: {
    areaComponent: {
      props: ['positionX', 'positionY'],
      template: '<area class="area" shape="circle" :coords=" positionX , positionY , 0" href="#" />',
    },
  },
};
</script>

<style>
/* .map-editor .button-circle{
  float: right;
}
.map-editor-nav{
  height: 10%;
  border-bottom: solid 2px rgb(161, 161, 161);
  font-size: 1.5rem;
}
.map-editor-pic{
  height: 90%;
}
.map-editor-pic > img{
  max-height: 100%;
}
.map-editor a{
  color: rgb(149, 149, 149);
  display: block;
}
.map-editor a:hover{
  color: rgb(49, 49, 49);
  text-decoration: none;
}
.map-editor .icon{
  font-size: 1.5rem;
}
.map-editor .title{
  font-size: 2rem;
} */
</style>
