<template>
    <div class="city_po" ref="hh">
      <all_head>
        <template v-slot:one><p class=" glyphicon glyphicon-menu-left jiao" @click="hui"></p></template>
        <template v-slot:two><p class="city_name">{{city}}</p></template>
        <template v-slot:three><p  class="switch" @click="hui">切换城市</p></template>
      </all_head>
      <div class="search_city">
        <div class="search_city_in">
          <input type="text" placeholder="输入学校、商务楼、地址" class="input1" v-model="ipt1">
          <button @click="tijiao"><span class="btn_a">提交</span></button>
        </div>
      </div>
      <div class="search_ct">
        <p class="p1" v-if="tj">搜索历史</p>
        <div class="search_ct_bottom">
          <div v-for="(once,k) in lgarr" :key="k" class="old_lg" v-if="tj" @click="btn_jump(once)">
            <p class="p2">{{once.name}}</p>
            <p class="p3">{{once.address}}</p>
          </div>
          <div v-for="(once,k) in getArr" :key="k" class="old_lg" v-if="!tj" @click="btn_jump(once)">
            <p class="p2">{{once.name}}</p>
            <p class="p3">{{once.address}}</p>
          </div>
          <div class="search_ct_dele" @click="delete_ls" v-if="tj">清空所有</div>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
    import All_head from "./all_head";
    import Search_ct from "./search_ct";
    export default {
      name: "city_position",
      data(){
        return {
          city:"",
          tj:true,
          lgarr:[],
          getArr:[],
          ipt1:'',
        }
      },
      components: {Search_ct, All_head},
      methods:{
        hui(){
          this.$router.go(-1);
        },
        delete_ls(){
          if (!!localStorage.cityArr){
            let a = JSON.parse(localStorage.cityArr);
            while (a.length > 0) {
              a.splice(0,1);
            }
            localStorage.cityArr=JSON.stringify(a);
          }
          this.lgarr=[];
        },
        tijiao(){
          if (this.ipt1 === '') {
            alert("请填写搜索内容");
          }else {
            //发起请求
            Vue.axios.get("https://elm.cangdu.org/v1/pois",{
              params:{
                city_id:this.city,
                keyword:this.ipt1
              }
            }).then((result)=>{
              console.log(result.data);
              this.getArr=result.data;
              this.tj=false;
            })
          }
        },
        btn_jump(v){
          console.log(localStorage.cityArr);
          if (!!!localStorage.cityArr){
            console.log(1);
            let str = JSON.stringify([]);
            localStorage.cityArr=str;
          }
          console.log(2);
          let a = JSON.parse(localStorage.cityArr);
          while (a.length > 5) {
            a.splice(0,1);
          }
          a.push(v);
          let str =JSON.stringify(a);
          localStorage.cityArr=str;
          console.log(localStorage.cityArr);
          localStorage.qyh_city=v.name;
          localStorage.qyh_geohash=v.geohash;
          this.$router.push({path:"/spHome"});
        }

      },
      mounted(){
        this.$refs.hh.style.height=window.innerHeight+"px";
        this.city = this.$route.query.name;
        if (!!localStorage.cityArr) {
          const a = JSON.parse(localStorage.cityArr);
          this.lgarr=a;
        }
      },
    }
</script>

<style scoped>
  .city_po{
    background-color: #f5f5f5;
  }
  .switch{
    font-size:0.14rem;
    margin-right: -0.05rem;
  }
  .city_name{
    font-size: 0.2rem;
    font-weight: 900;
  }
  .city_po .search_city{
   padding-top: 0.55rem;
    width: 100%;
    background-color: white;
  }
  .city_po .search_city_in{
    width: 100%;
    height: 1rem;
    border-top: 0.01rem solid rgba(0,0,0,0.1);
    border-bottom: 0.02rem solid rgba(0,0,0,0.1);
    text-align: center;
  }
  .city_po .input1{
    color: #333;
    display: block;
    margin:  0.1rem auto;
    font-size: 0.16rem;
    width: 90%;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 0.03rem;
    padding: 0.05rem;
  }
  .city_po .search_city_in>button{
    width: 90%;
    display: block;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 0.03rem;
    margin: 0 auto;
    background-color: #3190e8;
  }
  .city_po .btn_a{
    width: 100%;
    height: 0.3rem;
    display: flex;
    align-items: center;
    justify-content:center;
    color: white;
    border-radius: 0.03rem;
  }
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
