<template>
  <div class="one_1">
    <div class="op_head">
      <div class="head1"><span style="margin-left: 0.112rem; font-size: 0.16rem">ele.me</span><span class="pull-right" @click="zhuce" style="margin-right: 0.112rem;">注册</span><span class="pull-right">|</span><span class="pull-right" @click="denglu">登录</span>
        <div class="clearfix"></div>
      </div>
      <div class="head2"><span class="pull-left" style="color: #666">当前定位城市:</span><span class="pull-right" id="pull-right" style="margin-right: 0.08rem;">定位不准时,请在城市列表中选择</span>
        <div class="clearfix"></div>
      </div>
      <div class="head3"><span class="span-left">郑州</span><div class="head3_fh pull-right"><span class="pull-right glyphicon glyphicon-menu-right" id="span-right"></span></div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="remen">
      <div class="shuju">
        <div class="zumu"><span style="margin-left: 0.128rem">热门城市</span></div>
        <div class="once once-c" v-for="(one,key) in arr2" :key="key" @click="btn_name(one.name)">{{one.name}}</div>
      </div>
    </div>
    <div class="shuju" v-for="(once,k) in arr1" :key="k">
      <div class="zumu" style="padding-left: 0.16rem">{{once[0]}}<p v-if="once[0]==='A'" class="p1">&emsp;(按字母排序)</p></div>
      <div class="once" v-for="(one,key) in once[1]" :key="key" @click="btn_name(one.name)">
        {{one.name}}
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    name: "position_Sir",
    data(){
      return {
        arr1:[],
        arr2:[],
      }
    },
    computed:{},
    methods:{
      btn_name(k){
        this.$router.push({path:"/city",query:{name:k}});
      },
      zhuce(){
        this.$router.push({path:"/register"});
      },
      denglu(){
        this.$router.push({path:"/sign_in"});
      }
    },
    created(){
      Vue.axios.get('https://elm.cangdu.org/v1/cities?type=group',{}).then((result)=>{
        //后台传来的值存在result的data里面
        const d=result.data;
        let a = [];
        for (let i = 65; i <= 90; i++) {
          const b=String.fromCodePoint(i);
          if (d[b]) {
            a.push([b,d[b]])
          }
        }
        this.arr1=a;
      }).catch((error)=>{
        console.log(error.data);
      });

      Vue.axios.get('https://elm.cangdu.org/v1/cities?type=hot',{}).then((result)=>{
        //后台传来的值存在result的data里面
        this.arr2=result.data;
      }).catch((error)=>{
        console.log(error.data);
      })

    }
  }
</script>

<style scoped>
  .one_1{
    width: 100%;
    background:#f5f5f5;
    font-size: 0;
    line-height: 0;
  }
  .one_1 .shuju{
    font-size: 0.128rem;
    width: 100%;
    border-top: 1px solid rgba(0,0,0,0.1);
    border-left: 1px solid rgba(0,0,0,0.1);
    box-shadow:0 1px 1px rgba(0,0,0,0.1),0 -1px 1px rgba(0,0,0,0.1);
    margin-top: 3%;
    background:white;
  }
  .one_1 .zumu{
    font-size: 0.128rem;
    height: 0.3rem;
    line-height: 0.3rem;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .one_1 .once{
    font-size: 0.13rem;
    width: 25%;
    height: 0.4rem;
    line-height: 0.4rem;
    display: inline-block;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,0.1);
    border-bottom: 1px solid rgba(0,0,0,0.1);
    box-sizing: border-box;

    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    color: #666;
  }
  .one_1 .p1{
    display: inline-block;
    color: #999;
  }
  .one_1 .op_head{
    line-height: 0.2rem;
    font-size: 0.1rem;
  }
  .one_1 .head1{
    background-color: #3190e8;
    height: 0.48rem;
    line-height: 0.48rem;
    color: white;
    font-size: 0.16rem;
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
  }
  .one_1 .head2{
    background: white;
    height: 0.48rem;
    line-height: 0.48rem;
    font-size: 130%;
    margin-top: 0.48rem;
  }
  .one_1 .head3{
    text-align: right;
    background: white;
    height: 0.48rem;
    display: flex;
    align-items: center;
    justify-content: right;
    border-top: 2px solid rgba(0,0,0,0.1);
    border-bottom: 2px solid rgba(0,0,0,0.1);
  }
  .pull-left{
    margin-left: 0.08rem;
  }
  #pull-right{
    font-weight: 900;
    color: #9f9f9f;
  }
  .span-left{
    font-size: 180%;
    color: #3190e8;
    width: 12%;
  }
  #span-right{
    font-size: 160%;
    margin-right: 0.08rem;
    color: #999;
  }
  .head3_fh{
    width: 88%;
  }
  .one_1 .once-c{
    color: #3190e8;
  }
</style>
