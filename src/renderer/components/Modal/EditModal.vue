<template>
  <b-modal id="modal-edit-card" ref="editCardModal" :title="'修改'+cardTitle" hide-footer>
    <form ref="form">
      <!-- name -->
      <b-form-group :label="cardTitle+'名稱'" label-for="edit-name-input" class="mb-2">
        <b-input id="edit-name-input" variant="outline-secondary" v-model="editCard.name"/>
      </b-form-group>
      <!-- Select / Input -->
      <b-form-group :label="input.name" v-for="(input, inputIndex) in cardInput" v-bind:key="input.key" class="mb-2">
        <b-form-select v-if="input.type=='select'" v-model="editCard.value[inputIndex]">
          <option>預設</option>
          <option>非預設</option>
        </b-form-select>
        <b-form-input v-if="input.type!='select'" :type="input.type" v-model="editCard.value[inputIndex]" />
      </b-form-group>
      <!-- Button -->
      <b-form-group class="text-right">
        <b-button variant="secondary" @click="$refs.editCardModal.hide()">關閉</b-button>
        <b-button variant="primary" @click="editCardOkEvent">確定</b-button>
    </b-form-group>
    </form>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
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
    editCard: {
      type: Object,
      required: true,
    },
    editCardKey: {
      type: Number,
      required: true,
    },
  },
  methods: {
    editCardOkEvent() {
      this.cardContent.splice(this.editCardKey, 1, { ...this.editCard });
      this.$refs.editCardModal.hide();
    },
  },
};
</script>

<style>
</style>