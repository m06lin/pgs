<template>
  <main class="setting-content-page">
    <div class="setting-content-nav-box mx-3 row align-items-center">
      <h1 class="mx-2">停車場地圖 <b-button class="button-circle" variant="outline-secondary" v-b-modal.modal-add-map><i class="oi oi-plus"></i></b-button></h1>   
    </div>
    <div class="m-4">
      <b-card-group deck>
        <b-card style="max-width: 30%;" no-body v-for="(item, key) in mapContent" v-bind:key="item.key">
          <b-card-body class="text-right">
            <input type="text" class="text-center" style="border:0; font-size:1.3rem; min-width:50%" :value="item.name" readonly>
            <b-button variant="outline-dark" class="button-circle" @click="editMapNameModalEvent(item.name, key)"><i class="oi oi-pencil"></i></b-button>
            <b-button variant="outline-dark" class="button-circle" @click="deletMapModalEvent(item)"><i class="oi oi-trash"></i></b-button>
            <hr>
            <b-card-img :src="item.pic" alt="Image"></b-card-img>
          </b-card-body>
          <b-card-footer class="text-right">
            <b-button variant="outline-secondary">編輯區域</b-button>
            <b-button variant="outline-secondary" @click="editMapEvent(item)">編輯地圖</b-button>
            <b-button variant="outline-secondary" @click="editMapEvent2(item)">編輯地圖2</b-button>
          </b-card-footer>
        </b-card>
      </b-card-group>
    </div>

    <!-- Add New Map -->
    <b-modal id="modal-add-map" ref="addMapModal" title="新增地圖" @ok="addNewMapOkEvent"
      @show="addNewMapResetEvent"
      @hidden="addNewMapResetEvent">
      <form ref="form">
        <b-form-group label="名稱" label-for="new-name-input" >
          <b-form-input id="new-name-input" v-model="newMapName" required pattern="[^-@]*"></b-form-input>
        </b-form-group>
        <b-form-group label="圖片" label-for="new-map-input" >
          <b-form-file id="new-map-input" v-model="newMapPic" ref="newMapPicFile" :file-name-formatter="addNewMapFormatNames" accept="image/*"></b-form-file>
          <p>檔案格式 JPG,PNG</p>
        </b-form-group>
      </form>
    </b-modal>

    <!-- Edit Map Name -->
    <b-modal id="modal-edit-map-name" ref="editMapModal" title="修改地圖" @ok="editMapNameOkEvent">
      <form ref="form">
        <b-form-group label="地圖名稱" label-for="name-input">
          <b-form-input id="name-input" v-model="editMapName" ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>

    <!-- Delete Map -->
    <b-modal id="modal-delete-map" ref="deleteMapModal" title="刪除地圖" @ok="deleteMapOkEvent">
      <p>是否確定刪除<b>{{deleteMap.name}}</b>地圖?</p>
    </b-modal>

  </main>
</template>

<script>
export default {
  data() {
    return {
      newMapName: '',
      newMapPic: '',
      editMapName: '',
      editMapkey: 0,
      deleteMap: '',
      mapContent: [
        { id: 1, name: 'AB樓-B1', pic: 'https://tw-aed.mohw.gov.tw/UploadFile/20170703031250796.jpg' },
        { id: 2, name: 'CD樓-B1', pic: 'http://www.taching.com.tw/const/country/img/plan-2-spot.gif' },
      ],
    };
  },
  computed: {},
  mounted() {
  },
  methods: {
    editMapEvent(item) {
      this.$router.push({ name: 'editor', params: { id: item.id } });
    },
    editMapEvent2(item) {
      this.$router.push({ name: 'editor2', params: { id: item.id } });
    },
    editMapNameModalEvent(name, key) {
      this.editMapName = name;
      this.editMapkey = key;
      this.$refs.editMapModal.show();
    },
    editMapNameOkEvent(bvModalEvt) {
      // bvModalEvt.preventDefault();
      console.log(bvModalEvt);
      this.mapContent[this.editMapkey].name = this.editMapName;
      // this.$store.dispatch('', );
    },
    deletMapModalEvent(item) {
      this.deleteMap = item;
      this.$refs.deleteMapModal.show();
    },
    deleteMapOkEvent(bvModalEvt) {
      console.log(bvModalEvt);
      this.mapContent.splice(this.mapContent.indexOf(this.deleteMap), 1);
    },
    addNewMapFormatNames(files) {
      console.log(files);
      if (files.length === 1) {
        return files[0].name;
      }
      return `${files.length} files selected`;
    },
    addNewMapOkEvent() {
      this.newMapPic = 'https://house123.s3-ap-northeast-1.amazonaws.com/construction/1567/content/1388644766.44.jpg';
      this.mapContent.push({ name: this.newMapName, pic: this.newMapPic });
    },
    addNewMapResetEvent() {
      this.newMapName = '';
      this.newMapPic = '';
      // this.$refs.newMapPicFile.reset();
    },
  },
};
</script>

<style>
.button-circle{
  border-radius: 50%;
}
.setting-content-nav-box{
  height: 10%;
  border-bottom: solid 2px rgb(161, 161, 161);
}
.setting-content-title-box h1{
  font-size: 1.5rem;
}
</style>
