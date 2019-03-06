// 全局组件
import Vue from "vue/dist/vue.esm";

let Cmp2 = Vue.component('cmp2', {
    props:['name','age','list'],    //接收父组件传递的数据
    data() {
        return {
            a: 1,
            b: 2
        };
    },
    template: `
        <div>
            姓名 : {{name}}  
            年龄 : {{age}}
            <ul>
                <li v-for="item in list">{{item}}</li>
            </ul>
        </div>
    `
})

export default Cmp2;