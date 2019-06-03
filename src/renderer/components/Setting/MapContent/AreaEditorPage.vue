<template>
  <main class="setting-map map-content-editor">
    <div class="area-editor-title mx-3 row align-items-center">
      <a href="#/setting/mapContent" class="mr-3">
        <span class="icon mx-1"><i class="oi oi-chevron-left"></i></span>
        <span class="title">AB樓-B1層 編輯區域</span>
      </a>
      <b-button class="button-circle mt-2" variant="outline-dark" v-b-modal.modal-add-card><i class="oi oi-plus"></i></b-button>
    </div>
    
    <div class="area-editor-content">
      <div class="setting-content-scroll p-3">
        <b-card-group deck>
          <b-card class="mb-3 " style="min-width:20%; max-width:20%;" no-body v-for="(item, key) in areaContent" v-bind:key="item.key">
            <b-card-header class="text-right">
              <input type="text" class="text-center card-header-input" :value="item.name" readonly>
              <b-button variant="outline-dark" class="button-circle" v-b-modal.modal-edit-card @click="editCardModalEvent(item, key)"><i class="oi oi-pencil"></i></b-button>
              <b-button variant="outline-dark" class="button-circle mr-2" v-b-modal.modal-delete-card @click="deletCardModalEvent(item)"><i class="oi oi-trash"></i></b-button>
            </b-card-header>
            <b-card-body class="mx-2">
              <b-row class="mb-3" v-for="(input, inputIndex) in areaInput" v-bind:key="input.key"> 
                <label class="col-5">{{input.name}}</label>
                <b-form-input v-if="input.type=='select'" type="text" class="text-center col-6" v-model="item.value[inputIndex]" readonly/>
                 <b-form-input v-if="input.type!='select'" :type="input.type" class="text-center col-6" v-model="item.value[inputIndex]" readonly disabled/>
              </b-row>
            </b-card-body>
          </b-card>
        </b-card-group>
      </div>
    </div>

    <add-modal
      :cardTitle="areaTitle"
      :cardContent="areaContent"
      :cardInput="areaInput"
      :defaultCardContent="defaultAreaContent"
    >
    </add-modal>

    <edit-modal
      :cardTitle="areaTitle"
      :cardContent="areaContent"
      :cardInput="areaInput"
      :editCard="editArea"
      :editCardKey="editAreaKey"
    >
    </edit-modal>

    <delete-modal
      :cardTitle="areaTitle"
      :cardContent="areaContent"
      :deleteCard="deleteArea"
    >
    </delete-modal>

  </main>
</template>

<script>
import draggable from 'vuedraggable';
import AddModal from '../../Modal/AddModal';
import EditModal from '../../Modal/EditModal';
import DeleteModal from '../../Modal/DeleteModal';

export default {
  data() {
    return {
      /* eslint object-curly-newline: ["error", { "multiline": true }] */
      areaTitle: '區域',
      areaContent: [
        { id: 1, name: 'A區', value: ['預設', '#00ff00'] },
        { id: 2, name: 'B區', value: ['非預設', '#ff0000'] },
      ],
      areaInput: [
        { name: '區域預設', type: 'select' },
        { name: '區域顏色', type: 'color' },
      ],
      defaultAreaContent: { id: 0, name: '預設區域', value: ['預設', '#0000ff'] },
      editArea: {},
      editAreaKey: 0,
      deleteArea: {},
    };
  },
  components: { draggable, AddModal, EditModal, DeleteModal },
  methods: {
    dragEndEvent() {
      console.log(this.areaContent);
    },
    editCardModalEvent(item, key) {
      this.editArea = JSON.parse(JSON.stringify(item));
      this.editAreaKey = key;
    },
    deletCardModalEvent(item) {
      this.deleteArea = item;
    },
  },
};
</script>

<style>
.area-editor-title{
  height: 10%;
  border-bottom: solid 2px rgb(161, 161, 161);
  font-size: 1.5rem;
}
.area-editor-content{
  height: 90%;
  position:relative;
}
.area-editor-content .card-header {
    padding-right: 0.2rem;
}

.area-editor-content .card-body p{
  font-size: 1.2rem;
  font-weight:bold;
}
.card-color-input{
  height: 2rem;
}
</style>
