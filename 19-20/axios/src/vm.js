import Vue from 'vue/dist/vue.esm';
import Axios from 'axios';

let vm = new Vue({
    el:'#div1',
    data:{
        name:'',
        age:0
    },
    created(){
        // created适合 加载axios 请求数据  未加载页面
        // alert(1);
        Axios.get()
    },
    template: `
        <div>
           <label>姓名：</label><span>{{name}}</span><br/>
           <label>年龄：</label><span>{{age}}</span>
        </div>
    `
})