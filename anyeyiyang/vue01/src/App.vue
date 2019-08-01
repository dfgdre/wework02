<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
  export default {
    name: 'App',
  }
</script>

<style>
  html{
    width: 100%;
    min-height: 100%;
    font-size: 16px;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
