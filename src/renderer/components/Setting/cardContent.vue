<template>
    <div class="card-content">
      <div class="card-content-scroll p-3">
        <b-card-group deck>
          <b-card class="mb-3" style="min-width:20%; max-width:20%;" no-body v-for="(item, key) in cardContent" v-bind:key="item.key">
            <b-card-header class="text-right">
              <input type="text" class="text-center card-header-input" :value="item.name" readonly>
              <b-button variant="outline-dark" class="button-circle" @click="editCardModalEvent(item, key)"><i class="oi oi-pencil"></i></b-button>
              <b-button variant="outline-dark" class="button-circle mr-2" @click="deletCardModalEvent(item)"><i class="oi oi-trash"></i></b-button>
            </b-card-header>
            <b-card-body class="mx-2">
              <b-row class="mb-3" v-for="(select, selectIndex) in cardSelect" v-bind:key="select.key"> 
                <label class="col-5">{{select.name}}</label>
                 <b-form-input type="text" class="text-center col-6" v-model="item.value[selectIndex]" readonly/>
              </b-row>
              <b-row class="mb-3" v-for="(input, inputIndex) in cardInput" v-bind:key="input.key"> 
                <label class="col-5">{{input.name}}</label>
                 <b-form-input :type="input.type" class="text-center col-6" v-model="item.value[cardSelect.length+inputIndex]" readonly/>
              </b-row>
            </b-card-body>
          </b-card>
        </b-card-group>
      </div>    

    <!-- Add Card -->
    <b-modal id="modal-add-card" ref="addCardModal" :title="'新增'+cardTitle" hide-footer
      @show="addNewCardResetEvent"
      @hidden="addNewCardResetEvent">
      <b-form ref="editorCardForm">
        <!-- name -->
        <b-form-group :label="cardTitle+'名稱'" label-for="new-name-input" class="mb-2">
          <b-form-input id="new-name-input" v-model="editorCard.name" required pattern="[^-@]*"></b-form-input>
        </b-form-group>
        <!-- Select -->
        <b-form-group :label="select.name" class="mb-2" v-for="(select, selectIndex) in cardSelect" v-bind:key="select.key">
          <b-form-select v-model="editorCard.value[selectIndex]">
            <option>預設</option>
            <option>非預設</option>
          </b-form-select>
        </b-form-group>
        <!-- Input -->
        <b-form-group :label="input.name" v-for="(input, inputIndex) in cardInput" v-bind:key="input.key" class="mb-2">
          <b-form-input :type="input.type" v-model="editorCard.value[cardSelect.length+inputIndex]"/>
        </b-form-group>
        <!-- Button -->
        <b-form-group class="text-right">
          <b-button variant="secondary" @click="$refs.addCardModal.hide()">關閉</b-button>
          <b-button variant="primary" @click="addCardOkEvent">確定</b-button>
      </b-form-group>
      </b-form>
    </b-modal>

    <!-- Edit Card -->
    <b-modal id="modal-edit-card" ref="editCardModal" :title="'修改'+cardTitle" hide-footer>
      <form ref="form">
        <!-- name -->
        <b-form-group :label="cardTitle+'名稱'" label-for="edit-name-input" class="mb-2">
          <b-input id="edit-name-input" variant="outline-secondary" v-model="editorCard.name"/>
        </b-form-group>
        <!-- Select -->
        <b-form-group :label="select.name" class="mb-2" v-for="(select, selectIndex) in cardSelect" v-bind:key="select.key">
          <b-form-select v-model="editorCard.value[selectIndex]">
            <option>預設</option>
            <option>非預設</option>
          </b-form-select>
        </b-form-group>
        <!-- Input -->
        <b-form-group :label="input.name" v-for="(input, inputIndex) in cardInput" v-bind:key="input.key" class="mb-2">
          <b-form-input :type="input.type" v-model="editorCard.value[cardSelect.length+inputIndex]"/>
        </b-form-group>
        <!-- Button -->
        <b-form-group class="text-right">
          <b-button variant="secondary" @click="$refs.editCardModal.hide()">關閉</b-button>
          <b-button variant="primary" @click="editCardOkEvent">確定</b-button>
      </b-form-group>
      </form>
    </b-modal>

    <!-- Delete Card -->
    <b-modal id="modal-delete-card" ref="deleteCardModal" :title="'刪除'+cardTitle" hide-footer>
      <p>是否確定刪除<b>{{deleteCard.name}}</b>{{cardTitle}}?</p>
      <b-form-group class="text-right">
        <b-button variant="secondary" @click="$refs.deleteCardModal.hide()">關閉</b-button>
        <b-button variant="primary" @click="deleteCardOkEvent">確定</b-button>
      </b-form-group>
    </b-modal>

  </div>
</template>

<script>
export default {
  data() {
    return {
      addCardContent: {},
      initCard: {},
      editorCardKey: '',
      deleteCard: {},
    };
  },
  props: {
    defaultAddCardContent: {
      type: Object,
      required: true,
    },
    editorCard: {
      type: Object,
      required: true,
    },
    cardTitle: {
      type: String,
      required: true,
    },
    cardSelect: {
      type: Array,
      required: true,
    },
    cardContent: {
      type: Array,
      required: true,
    },
    cardInput: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.initCard = JSON.parse(JSON.stringify(this.editorCard));
  },
  methods: {
    addNewCardResetEvent() {
      this.editorCard = JSON.parse(JSON.stringify(this.initCard));
      this.editorCardKey = '';
    },
    addCardModalEvent() {
      this.$refs.addCardModal.show();
    },
    addCardOkEvent() {
      this.cardContent = this.cardContent.concat(this.editorCard);
      this.$refs.addCardModal.hide();
    },
    editCardModalEvent(item, key) {
      this.editorCard = JSON.parse(JSON.stringify(item));
      this.editorCardKey = key;
      this.$refs.editCardModal.show();
    },
    editCardOkEvent() {
      // console.log(this.editorCard);
      // console.log(this.cardContent);
      // console.log(this.editorCard);
      // console.log(this.editorCardKey);
      // console.log(this.cardContent[this.editorCardKey]);
      // this.cardContent[this.editorCardKey] = { ...this.editorCard };
      // this.carContent.splice(this.editorCardKey, 1, { ...this.editorCard });
      // console.log(this.cardContent[this.editorCardKey]);
      // this.cardContent[this.editorCardKey] = { name: 'SSSSSSSSSS' };
      this.cardContent.splice(this.editorCardKey, 1, { ...this.editorCard });
      // this.cardContent[this.editorCardKey].name = this.editorCard.name;
      // this.cardContent[this.editorCardkey].init = this.editorCard.init;
      // this.cardContent[this.editorCardkey].color = this.editorCard.color;

      this.$refs.editCardModal.hide();
    },
    deletCardModalEvent(item) {
      this.deleteCard = item;
      this.$refs.deleteCardModal.show();
    },
    deleteCardOkEvent() {
      this.cardContent.splice(this.cardContent.indexOf(this.deleteCard), 1);
      this.$refs.deleteCardModal.hide();
    },
  },
};

</script>
<style>
.card-content-scroll {
  overflow-x: auto; 
  position: absolute; 
  top: 0; right:0; bottom: 0; left: 0;
}
.card-content .card-header {
  padding-right: 0.2rem;
}
</style>