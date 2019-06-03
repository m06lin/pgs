<template>
  <main class="parking-space">
    <div class="parking-space-title mx-3 row align-items-center">
      <h1 class="mx-2">停車場車位 <b-button class="button-circle" variant="outline-dark" v-b-modal.modal-add-card><i class="oi oi-plus"></i></b-button></h1>   
    </div>
    <div class="parking-space-content">
      <card-content 
        :cardTitle="parkingTitle"
        :cardContent="parkingContent"
        :cardSelect="parkingSelect"
        :cardInput="parkingInput"
        :editorCard="editorParking">
      </card-content>
    </div>
  </main>
</template>
<script>
import CardContent from './cardContent';

export default {
  data() {
    return {
      /* eslint object-curly-newline: ["error", { "multiline": true }] */
      parkingTitle: '車位',
      parkingContent: [
        { id: 1, name: '月租車位', value: ['預設', '#00ff00', '#ff0000', '#0000ff'] },
        { id: 2, name: '日租車位', value: ['非預設', '#00ff00', '#ff0000', '#0000ff'] },
      ],
      editorParking: { name: '預設車位', value: ['預設', '#a0ff00', '#ff00a0', '#a000ff'] },
      parkingSelect: [{ name: '車位預設' }],
      parkingInput: [
        { name: '空車顏色', type: 'color' },
        { name: '停車顏色', type: 'color' },
        { name: '異常顏色', type: 'color' },
      ],
    };
  },
  components: { CardContent },
};
</script>

<style>
.parking-space-title{
  height: 10%;
  border-bottom: solid 2px rgb(161, 161, 161);
  font-size: 1.5rem;
}
.parking-space-content{
  height: 90%;
  position:relative;
}

</style>
