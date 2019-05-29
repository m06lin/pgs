<template>
  <main>
    <div class="setting-map area-editor-title mx-3 row align-items-center">
      <a href="#/setting/mapContent" class="mr-3">
        <span class="icon mx-1"><i class="oi oi-chevron-left"></i></span>
        <span class="title">A區 編輯區域</span>
      </a>
      <b-button class="button-circle mt-2" variant="outline-secondary" @click="addAreaModalEvent()"><i class="oi oi-plus"></i></b-button>
    </div>
    <div class="area-editor-content">
      <div class="setting-content-scroll p-3">
        <b-card-group deck>
          <b-card class="mb-3" style="min-width:20%; max-width:20%;" no-body v-for="(item, key) in areaContent" v-bind:key="item.key">
            <b-card-header class="text-right">
              <b-button variant="outline-dark" class="button-circle" @click="editAreaModalEvent(item, key)"><i class="oi oi-pencil"></i></b-button>
              <b-button variant="outline-dark" class="button-circle" @click="deletAreaModalEvent(item)"><i class="oi oi-trash"></i></b-button>
            </b-card-header>
            <b-card-body class="mx-2">
              <b-row class="my-2">
                <label class="col-5">區域名稱</label>
                <p>{{item.name}}</p>
              </b-row>
              <b-row class="my-2">    
                <label class="col-5">區域預設</label>
                <p>{{item.init}}</p>
              </b-row>
              <b-row class="my-2"> 
                <label class="col-5">區域顏色</label>
                <div class="col-6" v-bind:style="{ 'background-color': item.color}"></div>
              </b-row>
            </b-card-body>
          </b-card>
        </b-card-group>
      </div>
    </div>
    <!-- Add Area -->
    <b-modal id="modal-add-area" ref="addAreaModal" title="新增區域" @ok="addAreaOkEvent"
      @show="addNewResetEvent"
      @hidden="addAreaResetEvent">
      <b-form ref="newAreaForm">
        <b-form-group label="區域名稱" label-for="new-name-input">
          <b-form-input id="new-name-input" v-model="newArea.name" required pattern="[^-@]*"></b-form-input>
        </b-form-group>
        <b-form-group label="區域預設" label-for="new-init-input">
          <b-form-select id="new-init-input" v-model="newArea.init">
            <option>預設</option>
            <option>非預設</option>
          </b-form-select>
        </b-form-group>
        <b-form-group label="區域顏色" label-for="new-init-color">
          <b-form-input id="new-color-input" type="color" v-model="newArea.color"/>
        </b-form-group>
      </b-form>
    </b-modal>
    <!-- Edit Area -->
    <b-modal id="modal-edit-area" ref="editAreaModal" title="修改區域" @ok="editAreaOkEvent">
      <form ref="form">
        <b-form-group label="區域名稱" label-for="edit-name-input">
          <b-input id="edit-name-input" variant="outline-secondary" v-model="editArea.name"/>
        </b-form-group>
        <b-form-group label="區域預設" label-for="edit-init-input">
          <b-form-select id="edit-init-input" v-model="editArea.init">
            <option>預設</option>
            <option>非預設</option>
          </b-form-select>
        </b-form-group>
        <b-form-group label="區域顏色" label-for="edit-color-input">
          <b-form-input id="edit-color-input" type="color" v-model="editArea.color"/>
        </b-form-group>
      </form>
    </b-modal>

    <!-- Delete Area -->
    <b-modal id="modal-delete-area" ref="deleteAreaModal" title="刪除區域" @ok="deleteAreaOkEvent">
      <p>是否確定刪除<b>{{deleteArea.name}}</b>區域?</p>
    </b-modal>
  </main>
</template>

<script>

export default {
  data() {
    return {
      /* eslint object-curly-newline: ["error", { "multiline": true }] */
      areaContent: [
        { id: 1, name: 'A區', init: '預設', color: '#00ff00' },
        { id: 2, name: 'B區', init: '非預設', color: '#ff0000' },
      ],
      newArea: {},
      editArea: {},
      editAreakey: '',
      deleteArea: {},
    };
  },
  methods: {
    addAreaModalEvent() {
      this.$refs.addAreaModal.show();
    },
    addAreaOkEvent() {
      this.areaContent
        .push({ name: this.newArea.name, init: this.newArea.init, color: this.newArea.color });
    },
    editAreaModalEvent(item, key) {
      this.editArea = JSON.parse(JSON.stringify(item));
      this.editAreakey = key;
      this.$refs.editAreaModal.show();
    },
    editAreaOkEvent() {
      this.areaContent[this.editAreakey].name = this.editArea.name;
      this.areaContent[this.editAreakey].init = this.editArea.init;
      this.areaContent[this.editAreakey].color = this.editArea.color;
    },
    deletAreaModalEvent(item) {
      this.deleteArea = item;
      this.$refs.deleteAreaModal.show();
    },
    deleteAreaOkEvent() {
      this.areaContent.splice(this.areaContent.indexOf(this.deleteArea), 1);
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
.area-editor-content i{
  font-size: 1.2rem;
  font-weight:bold;
}
.area-editor-content .card-header .oi{

}
</style>
