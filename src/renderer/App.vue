<template>
  <div id="app" class="container-fluid p-0">
    <router-view name="nav" class="p-0"></router-view>
    <router-view name="main" class="p-0"></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
  html, body {
    height:100%;
    margin: 0;
    line-height: 1;
    -moz-user-select: none;  /* for Firefox */ ;
    -webkit-user-select: none;   /* for Chrome */;
  }
</style>
