<template>
  <b-modal id="modal-delete-card" ref="deleteCardModal" :title="'刪除'+cardTitle" hide-footer>
    <p>是否確定刪除<b>{{deleteCard.name}}</b>{{cardTitle}}?</p>
    <b-form-group class="text-right">
      <b-button variant="secondary" @click="$refs.deleteCardModal.hide()">關閉</b-button>
      <b-button variant="primary" @click="deleteCardOkEvent">確定</b-button>
    </b-form-group>
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
    deleteCard: {
      type: Object,
      required: true,
    },
    cardContent: {
      type: Array,
      required: true,
    },
  },
  methods: {

    deleteCardOkEvent() {
      this.cardContent.splice(this.cardContent.indexOf(this.deleteCard), 1);
      this.$refs.deleteCardModal.hide();
    },
  },
};
</script>

<style>
</style>