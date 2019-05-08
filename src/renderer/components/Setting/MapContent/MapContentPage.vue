<template>
  <main>
    <div class="setting-content-page">
      <div class="setting-content-title-box">
        <h1>停車場地圖 <b-button class="button-circle"><i class="oi oi-plus"></i></b-button></h1>   
      </div>
      <b-card-group deck>
        <b-card style="max-width: 30%;" no-body>
          <b-card-body class="text-center">
            <label for="mapName" style="font-size:1.2rem">地圖名稱</label>
            <input type="text" class="text-center" v-bind:class="{ 'input-unEdit': !titleEditMode }" style="font-size:1.3rem; width:30%" value="AB-B1" :readonly="!titleEditMode">
            <!-- <h5 class="text-center" style="border:0">AB-B1</h5> -->
            <b-button class="button-circle" v-if="!titleEditMode" @click="changeTitleEditMode(true)"><i class="oi oi-pencil"></i></b-button>
            <b-button class="button-circle" v-if="!titleEditMode"><i class="oi oi-trash"></i></b-button>
            <b-button class="button-circle" v-if="titleEditMode"><i class="oi oi-check"></i></b-button>
            <b-button class="button-circle" v-if="titleEditMode" @click="changeTitleEditMode(false)"><i class="oi oi-x"></i></b-button>
            <hr>
            <b-card-img src="https://tw-aed.mohw.gov.tw/UploadFile/20170703031250796.jpg" alt="Image"></b-card-img>
          </b-card-body>
          <b-card-footer class="text-right">
            <b-button>編輯區域</b-button>
            <b-button>編輯地圖</b-button>
          </b-card-footer>
        </b-card>
      </b-card-group>
    </div>

  </main>
</template>

<script>
export default {
  data() {
    return {
      titleEditMode: false,
    };
  },
  computed: {},
  mounted() {
  },
  methods: {
    changeTitleEditMode(isOpen) {
      this.titleEditMode = isOpen;
    },
  },
};
</script>

<style>
.input-unEdit{
  border:0;
}
.button-circle{
  border-radius: 50%;
}
.setting-content-page{
  padding: 3%;
}
.setting-content-title-box{
  border-bottom: solid 2px rgb(161, 161, 161);
}
.card-deck{
  margin-top: 2%;
}
</style>
