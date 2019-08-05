import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import pos from "../components/position_Sir"
import sign_in from "../components/sign_in"
import register from "../components/register"
import city from "../components/city_position"
import reset from "../components/reset"
import spHome from "../components/shopHome/spHome"
import home1 from "../components/shopHome/spHome1"
import home2 from "../components/shopHome/spHome2"
import home3 from "../components/shopHome/spHome3"
import home4 from "../components/shopHome/spHome4"
import fuwu_home from "../components/shopHome/home_my/fuwuzhongxin/fuwu_home"

export default new Router({
  routes: [
    {path:"",redirect:"/position_Sir"},
    {path:"/position_Sir",component:pos},
    {path:"/sign_in",component:sign_in},
    {path:"/register",component:register},
    {path:"/city",component:city},
    {path:"/reset",component:reset},
    {path:"/spHome",component:spHome,children:[
        {path:'',redirect: 'home1'},
        {path:'home1',component:home1},
        {path:'home2',component:home2},
        {path:'home3',component:home3},
        {path:'home4',component:home4},
      ]},
    {path:'/fuwu_home',component:fuwu_home}
  ]
})
