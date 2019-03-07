import Vue from 'vue'; 
import App from './App.vue';
import router from './router/index';


// axios数据请求
// import Axios from 'axios';
// import VueAxios from 'vue-axios';
// Vue.use(VueAxios,Axios);
 
// vue-resource数据请求
// import VueResource from 'vue-resource'
// Vue.use(VueResource);


let vm = new Vue({
    el:'#div1',
    data:{}, 
    components:{
        App
    },
    template:`
            <App/>
    `,
    router
})