<template>
  <!--暂时不用-->
    <div class="search_ct">
      <p class="p1">搜索历史</p>
      <div class="search_ct_bottom">
        <div v-for="(once,k) in lgarr" :key="k" class="old_lg">
          <p class="p2">{{once.name}}</p>
          <p class="p3">{{once.msg}}</p>
        </div>
        <div class="search_ct_dele" @click="tijiao" v-if="tj">清空所有</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "search_ct",
    data(){
      return {
        tj:true,
        lgarr:[
          {name:'十二营村',msg:'打啊啊打阿达打算打萨达',lianjie:""},
          {name:'十二营村',msg:'打啊啊打阿达打算打萨达',lianjie:""}
          ],
      }
    },
    methods:{
      tijiao(){
        this.tj=false;
      }
    }
  }
</script>

<style scoped>
  .search_ct .p1{
    text-indent: 1em;
    font-size: 0.12rem;
    line-height: 0.18rem;
  }
  .search_ct_bottom{
    width: 100%;
    background-color: white;
  }
  .old_lg{
    width: 100%;
    height: 0.75rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .p2{
    font-size: 0.16rem;
    padding-top: 0.15rem;
    padding-left: 0.2rem;
  }
  .p3{
    padding-left: 0.2rem;
    padding-top: 0.15rem;
    font-size: 0.12rem;
  }
  .search_ct_dele{
    height: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 0.01rem solid rgba(0,0,0,0.1);
  }
</style>
