<template>
  <transition name="fade" mode="out-in">
  <div class="register" ref="register">
    <all_head>
      <template v-slot:one><router-link class="fanhui_qyh" :to="{path:'/position_Sir'}"><span class="pull-right glyphicon glyphicon-menu-left" id="span-right"></span></router-link></template>
      <template v-slot:two><p class="p1">密码登录</p></template>
      <!--<template v-slot:three>111</template>-->
    </all_head>
    <div class="register_add_qyh">
      <div class="register_add_one_qyh">
        <input type="text" placeholder="账号" v-model="zh">
      </div>
      <div class="register_add_two_qyh">
        <input :type="checked?'text':'password'" placeholder="密码" v-model="password">
        <div class="want_switch">
          <van-switch v-model="checked" size="0.16rem" active-color="#07c160" />
        </div>
      </div>
      <div class="register_add_three_qyh">
        <input type="number" placeholder="验证码" class="yanzhengma" v-model="yzm">
        <div class="yanzhengma_change pull-right">
          <p>看不清</p>
          <p @click="post_data">换一张</p>
        </div>
        <img :src="img" alt=""class="pull-right">
        <div class="clearfix"></div>
      </div>
      <p class="login_tips">温馨提示：未注册过的账号，登录时将自动注册</p>
      <p class="login_tips">注册过的用户可凭账号密码登录</p>
      <router-link :to="{path: ''}" class="btn_a" ><button class="btn_tijiao" @click="sign_in">登录</button></router-link>

    </div>
    <router-link class="resetting" :to="{path:'/reset'}">重置密码?</router-link>
  </div>
  </transition>

</template>

<script>
  import Vue from 'vue';
  import All_head from "./all_head";
  export default {
    name: "register",
    data(){
      return {
        checked: false,
        img:"",
        zh:"",
        password:"",
        yzm:""
      }
    },
    components: {All_head},
    mounted(){
      this.$refs.register.style.height = window.innerHeight+"px";
      this.post_data();
    },
    methods: {
      post_data(){
        const url = 'https://elm.cangdu.org/v1/captchas';
        this.$http({
          method:'post',
          url:url,
          withCredentials: true,
        }).then((result)=>{
          this.img=result.data.code;
        })
      },
      sign_in(){
        let a='';
        if (this.zh ===""){
          a === '' ? a+="手机号":a+="/手机号";
        }
        if (this.password === "") {
          a === '' ? a+="密码":a+="/密码";
        }
        if (this.yzm === "") {
          a === '' ? a+="验证码":a+="/验证码";
        }
        if (a === ''){
          //发起请求提交账号
          const url = 'https://elm.cangdu.org/v2/login';
          this.$http({
            method:'post',
            url:url,
            data:{
              username:this.zh,
              password:this.password,
              captcha_code:this.yzm,
            },
            withCredentials: true,
          }).then((result)=>{
            const d = result.data;
            let jl = "begin";
            for (let k in d){
              localStorage[k] = d[k];
              jl += ","+k;
            }
            localStorage.dengluxinxi=jl;
            if (d.user_id) {
              this.$router.go(-1);
            }
          })
        } else {
          //提醒
          alert("请输入"+a);
        }
      }
    },
    computed:{}
  }
</script>

<style scoped>
  .p1{
    font-size: 0.2rem;
  }
  .register{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .register .fanhui_qyh{
    color: white;
  }
  .register .register_add_qyh{
    padding-top: 0.6rem;
  }
  .register .register_add_qyh>div{
    padding: 0.12rem;
    padding-left: 0.17rem;
    background-color: white;
    margin-bottom: 1px;
  }
  .register input{
    width: 50%;
  }
  .register .want_switch{
    text-align: right;
    display: inline-block;
    width: 48%;
  }
  .register .yanzhengma{
  }
  .register img{
    width: 0.8rem;
  }
  .register .yanzhengma_change{
    margin-left: 0.16rem;
  }
  .register .yanzhengma_change>p{
    font-size: 0.16rem;
  }
  .register .yanzhengma_change>p:nth-last-of-type(1){
    color: #3b95e9;
  }
  .register .login_tips{
    font-size: 0.112rem;
    color: red;
    padding: 0.128rem 0.16rem;
    line-height: 0.112rem;
  }
  .register .btn_tijiao{

    width: 100%;
    height: 100%;
    display: block;
    border-radius: 0.05rem;
    background-color: #4cd964;
  }
  .register .btn_a{
    margin: 0 auto;
    width: 95%;
    height: 0.5rem;
    display: flex;
    align-items: center;
    justify-content:center;
    color: white;
  }
  .resetting{
    display: block;
    color: #3b95e9;
    margin-left: 2.95rem;
    font-size: 0.14rem;
    margin-top: 0.25rem;
  }
</style>
