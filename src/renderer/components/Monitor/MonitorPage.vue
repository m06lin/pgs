<template>
  <main>
    <map-editor :map="mapData" :isEditor="isEditor"></map-editor>
  </main>
</template>

<script>
import MapEditor from '../Modal/Map';
export default {
  components: { MapEditor },
  data() {
    return {
      isEditor: false,
      mapData: {
        id: 100,
        name: 'AB樓_B1',
        image: 'https://tw-aed.mohw.gov.tw/UploadFile/20170703031250796.jpg',
      },
    };
  },
};
</script>

<style>

</style>
