import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import pos from "../components/position_Sir"
import sign_in from "../components/sign_in"
import register from "../components/register"
import city from "../components/city_position"
import cearch_ct from "../components/search_ct"

export default new Router({
  routes: [
    {path:"",redirect:"/position_Sir"},
    {path:"/position_Sir",component:pos},
    {path:"/sign_in",component:sign_in},
    {path:"/register",component:register},
    {path:"/city",component:city,children:[
        {path:'',redirect: '/search_ct'},
        {path:'/search_ct',component:cearch_ct}
      ]}
  ]
})
