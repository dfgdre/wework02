<template>
  <div class="city_po" ref="hh">
    <all_head>
      <template v-slot:one><p class=" glyphicon glyphicon-menu-left jiao" @click="hui"></p></template>
      <template v-slot:two><p class="city_name">{{city}}</p></template>
      <template v-slot:three><p  class="switch" @click="hui">切换城市</p></template>
    </all_head>
    <div class="search_city">
      <div class="search_city_in">
        <input type="text" placeholder="输入学校、商务楼、地址" class="input1">
        <button><router-link :to="{path:'search_ct'}" class="btn_a">提交</router-link></button>
      </div>
    </div>
    <search_ct></search_ct>
  </div>

</template>

<script>
    import All_head from "./all_head";
    import Search_ct from "./search_ct";
    export default {
      name: "city_position",
      data(){
        return {
          city:"",
        }
      },
      components: {Search_ct, All_head},
      methods:{
        hui(){
          this.$router.go(-1);
        }
      },
      mounted(){
        this.$refs.hh.style.minheight=window.innerHeight+"px";
        this.city = this.$route.query.name;
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
</style>
