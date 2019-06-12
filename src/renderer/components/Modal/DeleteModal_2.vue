<template>
  <b-modal id="modal-delete-card" ref="deleteCardModal" :title="$t('layout.modal.text.delete')+content.title" hide-footer>
    <p>{{$t('layout.modal.info.isDelete', { name: content.name, title: content.title })}}</p>
    <b-form-group class="text-right">
      <b-button variant="secondary" @click="$refs.deleteCardModal.hide()">{{$t('layout.modal.text.cancel')}}</b-button>
      <b-button variant="danger" @click="deleteCardOkEvent">{{$t('layout.modal.text.delete')}}</b-button>
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
    content: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteCardOkEvent() {
      this.$emit('Delete');
      this.$refs.deleteCardModal.hide();
    },
  },
};
</script>

<style>
</style>