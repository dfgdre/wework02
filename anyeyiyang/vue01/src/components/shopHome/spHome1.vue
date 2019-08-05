<template>
  <div class="spHome1">
    <div class="middle">
      <div class="one">
        <van-swipe :autoplay="500000" indicator-color="#3190e8" style="height: 100%;width: 100%;">
          <van-swipe-item>
            <div class="shop_fenlie" v-for="(once,k) in fenleiArr1" :key="k">
              <img :src="'https://fuss10.elemecdn.com'+once.image_url" alt="">
              <p>{{once.title}}</p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="shop_fenlie" v-for="(once,k) in fenleiArr2" :key="k">
              <img :src="'https://fuss10.elemecdn.com'+once.image_url" alt="">
              <p>{{once.title}}</p>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div>
      <div class="nearby_home">
        <div class="nearby">
          <span class="qyh span1">&#xe604;</span>
          <span class="span2">附近商家</span>
        </div>

        <div class="nearby_one">
          <div class="nearby_one_img pull-left">

          </div>
          <div class="message pull-right">
            <div class="message_one">
              <span class="message_one_p1">品牌</span>
              <span class="message_one_p2">效果演示</span>
              <span class="pull-right message_one_p3">保</span>
              <span class="pull-right message_one_p4">准</span>
              <span class="pull-right message_one_p5">票</span>
            </div>
            <div class="message_two clearfix">
              <div class="rate">
                <van-rate size="0.1rem" gutter="0" v-model="value" readonly allow-half void-icon="star" void-color="#eee"/>
              </div>
              <span>4</span>
              <span>月销111单</span>
              <span class="pull-right">111</span>
              <span class="pull-right">222</span>
            </div>
            <div class="message_three clearfix">
              <p class="pull-left">xxx<span>/</span>xxx</p>
              <p class="pull-right">xxx<span>/</span>xxx</p>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
    export default {
      name: "spHome1",
      data(){
        return {
          geohash:[],
          fenleiArr1:[],
          fenleiArr2:[],
          value:4.5
        }
      },
      created(){
        this.geohash=localStorage.qyh_geohash.split(",");
        Vue.axios.get("https://elm.cangdu.org/v2/index_entry").then(result=>{
          this.fenleiArr1=result.data.splice(0,8);
          this.fenleiArr2=result.data;
        });
        Vue.axios.get("https://elm.cangdu.org/shopping/restaurants",{
          params:{
            latitude:this.geohash[0],
            longitude:this.geohash[1],
          }
        }).then(result=>{
          console.log(result.data);
        })
      },
    }
</script>

<style scoped lang="less">
  .middle{
    padding-top: 0.48rem;
  }
  .one{
    width: 100%;
    height: 2rem;
    background: white;
  }
  .shop_fenlie{
    width: 25%;
    height: 1rem;
    text-align: center;
    display: inline-block;
  }
  .shop_fenlie img{
    margin: 0.1rem;
    width: 50%;
  }
  .shop_fenlie p{
    font-size: 0.14rem;
    font-weight: 400;
  }
  .span1{
    font-size: 0.2rem;
    color: rgba(0,0,0,0.4);
    margin-left: 0.1rem;
  }
  .span2{
    font-size: 0.13rem;
    color: rgba(0,0,0,0.4);
  }
  .nearby{
    margin-top: 0.11rem;
    padding-top: 0.08rem;
  }
  .nearby_home{
    background: white;
    width: 100%;
    height: 100%;
  }
  .nearby_one{
    background: saddlebrown;
    padding: 0.18rem 0.08rem;
  }
  .nearby_one_img{
    width: 0.64rem;
    height: 0.64rem;
    background: red;
  }
  .nearby_one_img img{
    width: 100%;
    height: 100%;
  }
  .message{
    width: 2.9rem;
    background: forestgreen;
    .message_two{
      padding: 0.1rem 0;
      .rate{
        display: inline-block;
      }
    }
  }

</style>
