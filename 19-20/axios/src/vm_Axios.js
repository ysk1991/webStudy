import Vue from 'vue/dist/vue.esm';
import Axios from 'axios';

let vm = new Vue({
    el:'#div1',
    data:{
        name:'',
        age:0,
        loaded: false
    },
    async created(){        // async 状态 里面可以把异步当同步写
        try{
            // created适合 加载axios 请求数据  未加载页面
            // alert(1);
            let { data } = Axios.get('./data/user.json');
            console.log(data);
            this.name = data.name;
            this.age = data.age;
            this.loaded = true;
        }catch(e){
            alert('加载数据失败，请刷新页面')
        } 
    },
    template: `
        <div v-if="loaded">
           <label>姓名：</label><span>{{name}}</span><br/>
           <label>年龄：</label><span>{{age}}</span>
        </div>
    `
})