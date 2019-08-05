<template>
  <div class="fuwu_home">
    <all_head>
      <template v-slot:one>
        <p class="qyh" @click="aa">&#xe65d;</p>
      </template>
      <template v-slot:two>
        <p>服务中心</p>
      </template>
    </all_head>
    
  </div>
</template>

<script>
    import All_head from "../../../all_head";
    export default {
      name: "fuwu_home",
      components: {All_head},
      methods:{
        aa(){
          this.$router.go(-1);
        }
      },
    }
</script>

<style scoped>

</style>
