// 写vue 配置 引入路由表
import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
import router from "./router";              //引入路由表
import '../css/main.css';
Vue.use(VueRouter);
let vm  = new Vue({
    el:'#div1',
    data:{

    },
    router
})