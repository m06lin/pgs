<template>
  <main class="map-editor">
    <div class="setting-content-nav-box mx-3 row align-items-center">
      <a href="#/setting/mapContent" class="mx-2">
        <span class="icon mx-2"><i class="oi oi-chevron-left"></i></span>
        <span class="title">AB-3樓 編輯地圖</span>
      </a>
      <b-button class="button-circle mt-2" variant="outline-secondary"><i class="oi oi-spreadsheet"></i></b-button>
    </div>

    <div class="map-editor-pic">
      <img
        src="https://tw-aed.mohw.gov.tw/UploadFile/20170703031250796.jpg">
    </div>

  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.map-editor .button-circle{
  float: right;
}
.map-editor-pic{
  height: 90%;
}
.map-editor-pic > img{
  max-height: 100%;
  width: 100%
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
}
</style>
