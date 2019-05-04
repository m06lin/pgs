<template>
  <div class="row m-0">
    <router-view name="content" class="col-9 p-0 main-height"></router-view>
    <router-view name="sidebar" class="col-3 p-0 main-height"></router-view>
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
