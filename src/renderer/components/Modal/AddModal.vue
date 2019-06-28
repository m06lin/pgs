<template>
  <b-modal id="modal-add-card" ref="addCardModal" :title="'新增'+cardTitle" hide-footer
    @show="addNewCardResetEvent"
    @hidden="addNewCardResetEvent">
    <b-form ref="initCardForm" @submit="addCardOkEvent">
      <!-- name -->
      <b-form-group :label="cardTitle+'名稱'" class="mb-2">
        <b-form-input v-model="defaultCardContent.name" :data-vv-name="cardTitle" :class="{ 'is-invalid': errors.has(cardTitle) }" v-validate="'required|specailtype'"></b-form-input>
        <span class="invalid-feedback">{{ errors.first(cardTitle) }}</span>
      </b-form-group>
      <!-- Select / Input -->
      <b-form-group :label="input.name" v-for="(input, inputIndex) in cardInput" v-bind:key="input.key" class="mb-2">
        <b-form-select v-if="input.type=='select'" v-model="defaultCardContent.value[inputIndex]">
          <option>預設</option>
          <option>非預設</option>
        </b-form-select>
        <b-form-input v-if="input.type!='select'" :type="input.type" v-model="defaultCardContent.value[inputIndex]"  v-validate="'required'"/>
        <span>{{ errors.first(input.name) }}</span>
      </b-form-group>
      <!-- Button -->
      <b-form-group class="text-right">
        <b-button variant="secondary" @click="$refs.addCardModal.hide()">關閉</b-button>
        <b-button variant="primary">確定</b-button>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      initCard: {},
    };
  },
  props: {
    cardTitle: {
      type: String,
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
    defaultCardContent: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.initCard = JSON.parse(JSON.stringify(this.defaultCardContent));
  },
  methods: {
    addNewCardResetEvent() {
      this.defaultCardContent = JSON.parse(JSON.stringify(this.initCard));
    },
    addCardOkEvent() {
      this.cardContent.splice(this.cardContent.length, 0, { ...this.defaultCardContent });
      this.$refs.addCardModal.hide();
    },
  },
};
</script>

<style>
</style>