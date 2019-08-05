<template>
  <div class="spHome4">
    <div class="dl clearfix">
      <p class=" qyh pull-left touxiang">&#xe61b;</p>
      <p class="p1 ">登录/注册</p>
      <p class="qyh pull-right">&#xe601;</p>
      <p class="p2 ">咱无绑定手机号</p>
    </div>
    <div class="two clearfix">
      <div class="pull-left"><span>000</span><span>元</span>
        <p>我的余额</p>
      </div>
      <div class="pull-left">0个</div>
      <div class="pull-left">0积分</div>
    </div>
    <div class="three">
      <div class="dingdan clearfix">
        <p class="qyh pull-left">&#xe7ae;</p>
        <div class="pull-left">我的订单 <span class="qyh">&#xe601;</span></div>
      </div>
      <div class="jifen clearfix">
        <p class="qyh pull-left">&#xe7ae;</p>
        <div class="pull-left">我的订单 <span class="qyh">&#xe601;</span></div>
      </div>
      <div class="huiyuan clearfix">
        <p class="qyh pull-left">&#xe7ae;</p>
        <div class="pull-left">我的订单 <span class="qyh">&#xe601;</span></div>
      </div>
    </div>
    <div class="four">
      <div class="fuwu clearfix" @click="fuwu">
        <p class="qyh pull-left">&#xe7ae;</p>
        <div class="pull-left" >服务中心<span class="qyh">&#xe601;</span></div>
      </div>
      <div class="xiazai clearfix">
        <p class="qyh pull-left">&#xe7ae;</p>
        <div class="pull-left">下载饿了吗<span class="qyh">&#xe601;</span></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "spHome4",
      methods:{
        fuwu(){
          this.$router.push('/fuwu_home');
        }
      },
    }
</script>

<style scoped lang="less">
  .spHome4{
    padding-top: 0.48rem;
    .dl{
      background: #3190e8;
      padding: 0.1rem 0.1rem;
      .touxiang{
        color: white;
        font-size: 0.7rem;
        /*display: inline-block;*/
      }
      .p1{
        margin-top: 0.2rem;
        text-indent: 0.5em;
      }
      .p2{
        margin-top: 0.1rem;
        text-indent: 0.5em;
      }
    }
    .two{
      width: 100%;
      div{
        width: 33.3%;
        height: 1rem;
        background-color: white;
      }
    }
    .three{
      margin-top: 0.1rem;
      background-color: white;
    }
    .four{
      width: 100%;
      margin-top: 0.1rem;
      background-color: white;
      .fuwu{
        background: saddlebrown;
      }
      .xiazai{
        background-color: darkgray;
      }
    }
  }
</style>
