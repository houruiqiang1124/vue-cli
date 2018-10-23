import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  routes: [
    {path: "/", redirect: "/index"},
    {path: "/index", component: resolve => {require(['@/page/home/index'],resolve)}},
    {path: "/find", component: resolve => {require(['@/page/find/find'],resolve)}},
    {path: "/order", component: resolve => {require(['@/page/order/order'],resolve)}},
    {path: "/main", component: resolve => {require(['@/page/main/main'],resolve)}}
  ]
})
