<template>
  <b-modal id="modal-edit-card" ref="editCardModal" :title="$t('layout.modal.text.edit')+content.title" hide-footer @show="setFormData">
    <form ref="form">
      <!-- Input -->
      <b-form-group :label="input.name" v-for="input in content.inputs" v-bind:key="input.key" class="mb-2">
        <b-form-input v-if="input.type=='text'" :name="input.name" type="text" v-model="data[input.key]" v-validate="input.validate" :class="{ 'is-invalid': errors.has(input.name) }"/>
        <b-form-input v-if="input.type=='color'" :name="input.name" type="color" v-model="data[input.key]" v-validate="input.validate"/>
        <b-form-file  v-if="input.type=='file'" :name="input.name" v-model="data[input.key]" :accept="input.accept"></b-form-file>
        <b-form-select v-if="input.type=='select'" :name="input.name" v-model="data[input.key]">
          <option>{{$t('layout.modal.select.default')}}</option>
          <option>{{$t('layout.modal.select.notDefault')}}</option>
        </b-form-select>
        <span class="invalid-feedback">{{ errors.first(input.name) }}</span>
      </b-form-group>
      <!-- Button -->
      <b-form-group class="text-right">
        <b-button variant="secondary" @click="$refs.editCardModal.hide()">{{$t('layout.modal.text.cancel')}}</b-button>
        <b-button variant="primary" v-if="!this.item" @click="addCardOkEvent()">{{$t('layout.modal.text.create')}}</b-button>
        <b-button variant="info" v-if="this.item" @click="editCardOkEvent()">{{$t('layout.modal.text.edit')}}</b-button>
    </b-form-group>
    </form>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      data: {},
    };
  },
  // watch: {
  //   item() {
  //     this.setFormData();
  //   },
  //   content() {
  //     this.setFormData();
  //   },
  // },
  // mounted() {
  //   this.setFormData();
  // },
  props: {
    content: {
      type: Object,
      required: true,
    },
    item: {
      type: Object,
      // required: true,
    },
  },
  methods: {
    setFormData() {
      this.data = {};
      const item = this.item || {};
      this.content.inputs.forEach((inputDef) => {
        const { key, defaultValue } = inputDef;
        const val = item[key] || defaultValue;
        this.$set(this.data, key, val);
      });
    },
    addCardOkEvent() {
      this.$emit('Add', { ...this.data });
      this.$refs.editCardModal.hide();
    },
    editCardOkEvent() {
      this.$emit('Edit', { ...this.item, ...this.data });
      this.$refs.editCardModal.hide();
    },
  },
};
</script>

<style>
</style>