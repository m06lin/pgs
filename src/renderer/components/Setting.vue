<template>
  <div class="row m-0">
    <router-view name="sidebar" class="col-sm-2 col-md-2 p-0 main-height"></router-view>
    <router-view name="content" class="col-sm-10 col-md-10 p-0 main-height"></router-view>
  </div>
</template>

<script>
export default {
  methods: {
  },
};
</script>

<style>
  .main-height {
    min-height: calc(100vh - 60px);
  }
</style>