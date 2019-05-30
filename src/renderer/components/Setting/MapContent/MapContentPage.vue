<template>
  <main class="setting-map map-editor">
    <div class="setting-content-title mx-3 row align-items-center">
      <h1 class="mx-2">停車場地圖 <b-button class="button-circle" variant="outline-dark" v-b-modal.modal-add-map><i class="oi oi-plus"></i></b-button></h1>   
    </div>
    <div class="setting-content-maps">
      <div class="setting-content-scroll p-3">
        <draggable element="div" :list="mapContent" class="card-deck"
        chosen-class="card-chosen"
        @end="dragEndEvent()">
          <b-card class="mb-3 card-cursor" style="min-width:25%; max-width:25%;" no-body v-for="(item, key) in mapContent" v-bind:key="item.key">
            <b-card-header class="text-right">
              <input type="text" class="text-center card-header-input" :value="item.name" readonly>
              <b-button variant="outline-dark" class="button-circle" @click="editMapNameModalEvent(item.name, key)"><i class="oi oi-pencil"></i></b-button>
              <b-button variant="outline-dark" class="button-circle" @click="deletMapModalEvent(item)"><i class="oi oi-trash"></i></b-button>
            </b-card-header>
            <b-card-body class="text-right">
              <b-card-img :src="item.pic" alt="Image"></b-card-img>
            </b-card-body>
            <b-card-footer class="text-right">
              <b-button variant="outline-dark"  @click="editAreaEvent(item)">編輯區域</b-button>
              <b-button variant="outline-dark" @click="editMapEvent(item)">編輯地圖</b-button>
              <!-- <b-button variant="outline-secondary" @click="editMapEvent2(item)">編輯地圖2</b-button> -->
            </b-card-footer>
          </b-card>
        </draggable>
      </div>
    </div>
    <!-- <div class="setting-content-maps p-3">
      <div class="" style="width: 90%;">
        <div class="card" style="width: 25%;" v-for="(item, key) in mapContent" v-bind:key="item.key">
          <div class="card-header text-center">
              {{item.name}}
              <b-button variant="outline-dark" class="button-circle" @click="editMapNameModalEvent(item.name, key)"><i class="oi oi-pencil"></i></b-button>
              <b-button variant="outline-dark" class="button-circle" @click="deletMapModalEvent(item)"><i class="oi oi-trash"></i></b-button>
          </div>
          <div class="card-body">
              <img class="card-img" :src="item.pic" alt="Image">
          </div>
          <div class="card-footer text-right">
            <b-button variant="outline-secondary">編輯區域</b-button>
            <b-button variant="outline-secondary" @click="editMapEvent(item)">編輯地圖</b-button>
            <b-button variant="outline-secondary" @click="editMapEvent2(item)">編輯地圖2</b-button>
          </div>
        </div>
      </div>
    </div> -->

    <!-- Add New Map -->
    <b-modal id="modal-add-map" ref="addMapModal" title="新增地圖"
      @show="addNewMapResetEvent"
      @hidden="addNewMapResetEvent"
      hide-footer>
      <form ref="form">
        <b-form-group label="名稱" label-for="new-name-input" >
          <b-form-input id="new-name-input" v-model="newMapName" required pattern="[^-@]*"></b-form-input>
        </b-form-group>
        <b-form-group label="圖片" label-for="new-map-input" >
          <b-form-file id="new-map-input" v-model="newMapPic" ref="newMapPicFile" :file-name-formatter="addNewMapFormatNames" accept="image/*"></b-form-file>
          <p>檔案格式 JPG,PNG</p>
        </b-form-group>
        <b-form-group class="text-right">
          <b-button variant="secondary" @click="$refs.addMapModal.hide()">關閉</b-button>
          <b-button variant="primary" @click="addNewMapOkEvent">確定</b-button>
        </b-form-group>
      </form>
    </b-modal>

    <!-- Edit Map Name -->
    <b-modal id="modal-edit-map" ref="editMapModal" title="修改地圖" hide-footer>
      <form ref="form">
        <b-form-group label="地圖名稱" label-for="name-input" class="mb-3">
          <b-form-input id="name-input" v-model="editMapName" ></b-form-input>
        </b-form-group>
        <b-form-group class="text-right">
          <b-button variant="secondary" @click="$refs.editMapModal.hide()">關閉</b-button>
          <b-button variant="primary" @click="editMapNameOkEvent">確定</b-button>
        </b-form-group>
      </form>
    </b-modal>

    <!-- Delete Map -->
    <b-modal id="modal-delete-map" ref="delteMapModal" title="刪除地圖" hide-footer>
      <p>是否確定刪除<b>{{deleteMap.name}}</b>地圖?</p>
      <b-form-group class="text-right">
        <b-button variant="secondary" @click="$refs.delteMapModal.hide()">關閉</b-button>
        <b-button variant="primary" @click="deleteMapOkEvent">確定</b-button>
      </b-form-group>
    </b-modal>

  </main>
</template>

<script>
import draggable from 'vuedraggable';

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
  components: { draggable },
  methods: {
    dragEndEvent() {
      console.log(this.mapContent);
    },
    editAreaEvent(item) {
      this.$router.push({ name: 'areaEditor', params: { id: item.id } });
    },
    editMapEvent(item) {
      this.$router.push({ name: 'mapEditor', params: { id: item.id } });
    },
    editMapEvent2(item) {
      this.$router.push({ name: 'editor2', params: { id: item.id } });
    },
    addNewMapOkEvent() {
      this.newMapPic = 'https://house123.s3-ap-northeast-1.amazonaws.com/construction/1567/content/1388644766.44.jpg';
      this.mapContent.push({ name: this.newMapName, pic: this.newMapPic });
      this.$refs.addMapModal.hide();
    },
    addNewMapResetEvent() {
      this.newMapName = '';
      this.newMapPic = '';
      // this.$refs.newMapPicFile.reset();
    },
    addNewMapFormatNames(files) {
      console.log(files);
      if (files.length === 1) {
        return files[0].name;
      }
      return `${files.length} files selected`;
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
      this.$refs.editMapModal.hide();
      // this.$store.dispatch('', );
    },
    deletMapModalEvent(item) {
      this.deleteMap = item;
      this.$refs.delteMapModal.show();
    },
    deleteMapOkEvent(bvModalEvt) {
      console.log(bvModalEvt);
      this.mapContent.splice(this.mapContent.indexOf(this.deleteMap), 1);
      this.$refs.delteMapModal.hide();
    },


  },
};
</script>

<style>
.button-circle{
  border-radius: 50%;
}
.setting-content-title{
  height: 10%;
  border-bottom: solid 2px rgb(161, 161, 161);
  font-size: 1.5rem;
}
.setting-content-scroll {
  overflow-x: auto; 
  position: absolute; 
  top: 0; right:0; bottom: 0; left: 0;
}
.setting-content-maps{
  height: 90%;
  position:relative;
}
/* .card-columns{
  height: 100%;
  column-count: 4;
} */
.card-header-input {
  border:0;
  font-size:1.3rem;
  max-width:50%;
  background-color: rgba(0, 0, 0, 0);
}
.card-cursor{
  cursor: -webkit-grab;
  cursor: grab;
  /* cursor: move; */
}
.card-chosen {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}

</style>
