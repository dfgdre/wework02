const pro1 = {
  state:{
    //声明所有数据
    products:[
      {name:"西瓜",price:2},
      {name:"西瓜",price:8},
      {name:"西瓜",price:7},
      {name:"西瓜",price:6},
      {name:"西瓜",price:4},
      {name:"西瓜",price:5},
    ],
  },
  getters: {
    setPro: state => {
      return state.products.map(p => {
        return {
          name:p.name,price:p.price*0.5
        }
      });
    },
  },
  mutations:{
    cutPrice1(state,v){
      state.products.forEach(p=>{
        p.price -= v;
      })
    }
  },
  actions:{
    cutPrice2(context,v){
      context.commit('cutPrice1',v);
    }
  },
};
