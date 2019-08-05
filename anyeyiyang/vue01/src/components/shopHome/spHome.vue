<template>
  <div class="spHome" ref="hhh">
    <div class="head">
      <all_head>
        <template v-slot:one>
          <p @click="aa">放大镜</p>
        </template>
        <template v-slot:two>
          <p>{{city}}</p>
        </template>
        <template v-slot:three>
          <p v-if="!dengluguo" class="dl">登录|注册</p>
          <p class="pull-right qyh dlg_qyh" v-else>&#xe61b;</p>
        </template>
      </all_head>
    </div>
    <router-view></router-view>
    <div class="floor">
      <div class="floor1 pull-left qyh" @click="btn_change('外卖')"><p class="p1" :class="{change_color:changecolor==='外卖'}">&#xe696;</p><p class="p2">外卖</p></div>
      <div class="floor2 pull-left qyh" @click="btn_change('搜索')"><p class="p1" :class="{change_color:changecolor==='搜索'}">&#xe665;</p><p class="p2">搜索</p></div>
      <div class="floor3 pull-left qyh" @click="btn_change('订单')"><p class="p1" :class="{change_color:changecolor==='订单'}">&#xe608;</p><p class="p2">订单</p></div>
      <div class="floor4 pull-left qyh" @click="btn_change('我的')"><p class="p1" :class="{change_color:changecolor==='我的'}">&#xe7af;</p><p class="p2">我的</p></div>
      <div class="clearfix"></div>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue';
    import All_head from "../all_head";
    export default {
      name: "spHome",
      components: {All_head},
      data(){
          return {
            city:"",
            dengluguo:false,
            changecolor:"外卖",
          }
      },
      created(){
        this.city=localStorage.qyh_city;
      },
      mounted(){
        this.dengluguo = localStorage.user_id?true:false;
        this.$refs.hhh.style.height=window.innerHeight+"px";
      },
      methods:{
        aa(){
          this.$router.go(-1)
        },
        btn_change(v){
          this.changecolor=v;
          if (v === '外卖') {
            this.$router.push('home1')
          }else if (v === '搜索') {
            this.$router.push('home2')
          }else if (v === '订单') {
            this.$router.push('home3')
          }else if (v === '我的') {
            this.$router.push('home4')
          }
        }
      }
    }
</script>

<style scoped lang="less">
  .spHome{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .dl{
    font-size: 0.16rem;
  }
  .dlg_qyh{
    font-size: 0.25rem;
  }
  .floor{
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 1;
    border-top: 1px solid rgba(0,0,0,0.1);
  }
  .floor div{
    width: 25%;
    font-size: 0.3rem;
    text-align: center;
    padding: 0.05rem  0  0.02rem  0;
  }
  .p2{
    font-size: 0.08rem;
  }
  .p1{
    font-size: 0.2rem;
  }
  .change_color{
    color: #3190e8;
  }


</style>
