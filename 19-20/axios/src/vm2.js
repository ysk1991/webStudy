import Vue from 'vue/dist/vue.esm'; 
 

let vm = new Vue({
    el: '#div1',
    data: {
        name:'',
        age:0
    },
    async created() { // async 状态 里面可以把异步当同步写
        
    },
    template: `
        <div>
           {{result}}
        </div>
    `
})