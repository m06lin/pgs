<template>
  <main class="setting-map map-editor">
    <div class="setting-content-title mx-3 row align-items-center">
      <h1 class="mx-2">{{$t('layout.parkingMaps.title.parkingmaps')}} <b-button class="button-circle" variant="outline-dark" v-b-modal.modal-edit-card @click="addModalContentEvent()"><i class="oi oi-plus"></i></b-button></h1>   
    </div>
    <div class="setting-content-maps">
      <div class="setting-content-scroll p-3">
        <draggable element="div" :list="mapData" class="card-deck"
        chosen-class="card-chosen">
          <b-card class="mb-3 card-cursor" style="min-width:25%; max-width:25%;" no-body v-for="(item, index) in mapData" v-bind:key="item.key">
            <b-card-header class="text-right">
              <input type="text" class="text-center card-header-input" :value="item.name" readonly>
              <b-button variant="outline-dark" class="button-circle" v-b-modal.modal-edit-card @click="editModalContentEvent(item, index)"><i class="oi oi-pencil"></i></b-button>
              <b-button variant="outline-dark" class="button-circle" v-b-modal.modal-delete-card @click="deleteModalContentEvent(item, index)"><i class="oi oi-trash"></i></b-button>
            </b-card-header>
            <b-card-body class="text-right">
              <b-card-img :src="item.image" alt="Image"></b-card-img>
            </b-card-body>
            <b-card-footer class="text-right">
              <b-button variant="outline-dark"  @click="editAreaEvent(item)">{{$t('layout.parkingMaps.button.editAreas')}}</b-button>
              <b-button variant="outline-dark" @click="editMapEvent(item)">{{$t('layout.parkingMaps.button.editMap')}}</b-button>
            </b-card-footer>
          </b-card>
        </draggable>
      </div>
    </div>

    <editor-modal
      :content="modalContent"
      :item="editTarget"
      @Add="addItemEvent"
      @Edit="editItemEvent"
    >
    </editor-modal>
   
    <delete-modal
      :content="deleteModalContent"
      @Delete="deleteItemEvent"
    >
    </delete-modal>

  </main>
</template>

<script>
import draggable from 'vuedraggable';
import EditorModal from '../../modal/EditorModal_2';
import DeleteModal from '../../modal/DeleteModal_2';

export default {
  data() {
    const addModalContent = {
      title: this.$t('layout.parkingMaps.title.map'),
      inputs: [
        {
          name: this.$t('layout.parkingMaps.label.name'),
          key: 'name',
          type: 'text',
          defaultValue: 'Default Floor',
          isRequired: true,
          validate: 'required:true|regex:^[^-@]*$',
          patternInfo: '請勿包含特殊字元,-@',
        },
        {
          name: this.$t('layout.parkingMaps.label.pic'),
          key: 'image',
          type: 'file',
          defaultValue: 'https://house123.s3-ap-northeast-1.amazonaws.com/construction/1567/content/1388644766.44.jpg',
          accept: 'image/*',
          acceptInfo: 'jpeg/png',
        },
      ],
      // buttons: [],
    };

    return {
      //  假資料
      mapData: [
        {
          id: 100,
          name: 'AB樓_B1',
          image: 'https://tw-aed.mohw.gov.tw/UploadFile/20170703031250796.jpg',
        },
        {
          id: 101,
          name: 'CD樓_B1',
          image: 'http://www.taching.com.tw/const/country/img/plan-2-spot.gif',
        },
      ],
      addModalContent,
      editModalContent: {
        index: 0,
        title: this.$t('layout.parkingMaps.title.map'),
        inputs: [
          {
            name: this.$t('layout.parkingMaps.label.name'),
            key: 'name',
            type: 'text',
            defaultValue: '',
            validate: 'required:true|regex:^[^-@]*$',
            patternInfo: '請勿包含特殊字元,-@',
          },
        ],
      },
      deleteModalContent: {
        title: this.$t('layout.parkingMaps.title.map'),
        index: 0,
        name: '',
      },
      editTarget: null,
      modalContent: {},
    };
  },
  components: {
    draggable, EditorModal, DeleteModal,
  },
  methods: {
    addModalContentEvent() {
      this.modalContent = this.addModalContent;
      this.editTarget = null;
    },
    editModalContentEvent(editItem, editIndex) {
      this.editModalContent.index = editIndex;
      this.modalContent = this.editModalContent;
      this.editTarget = editItem;
    },
    deleteModalContentEvent(deleteItem, deleteIndex) {
      this.deleteModalContent.name = deleteItem.name;
      this.deleteModalContent.index = deleteIndex;
    },
    addItemEvent(map) {
      this.mapData.push({ ...map, id: 0 });
    },
    editItemEvent(map) {
      const { index } = this.editModalContent;
      this.mapData.splice(index, 1, map);
    },
    deleteItemEvent() {
      const { index } = this.deleteModalContent;
      console.log(this.mapData);
      console.log(index);
      this.mapData.splice(index, 1);
    },
    editAreaEvent(item) {
      this.$router.push({ name: 'areaEditor', params: { id: item.id } });
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
