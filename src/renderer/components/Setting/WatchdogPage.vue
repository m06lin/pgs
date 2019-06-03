<template>
  <main class="watchdog">
    <div class="watchdog-title mx-3 row align-items-center">
      <h1 class="mx-2">逾時監控器 <b-button class="button-circle" variant="outline-dark" v-b-modal.modal-add-card><i class="oi oi-plus"></i></b-button></h1>   
    </div>
    <div class="watchdog-content">
      <card-content
        :cardTitle="watchdogTitle"
        :cardContent="watchdogContent"
        :cardSelect="watchdogSelect"
        :cardInput="watchdogInput"
        :editorCard="editorWatchdog">
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
      watchdogTitle: '監控器',
      watchdogContent: [
        { id: 1, name: '逾時A123123', value: [7] },
        { id: 2, name: '逾時B', value: [14] },
      ],
      editorWatchdog: { name: '預設逾時', value: [5] },
      watchdogSelect: [],
      watchdogInput: [
        { name: '逾時', type: 'number' },
      ],
    };
  },
  components: { CardContent },

};
</script>

<style>
.watchdog-title{
  height: 10%;
  border-bottom: solid 2px rgb(161, 161, 161);
  font-size: 1.5rem;
}
.watchdog-content{
  height: 90%;
  position:relative;
}
</style>
