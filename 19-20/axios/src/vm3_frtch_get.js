import Vue from 'vue/dist/vue.esm'; 

let vm = new Vue({
    el: '#div1',
    data: {
        name: '',
        age: 0,
        loaded: false
    },
    async created() { // async 状态 里面可以把异步当同步写
        let res = await fetch('./data/user.json');
        let data = await res.json();
        console.log(data);
        this.name = data.name;
        this.age = data.age;
        this.loaded = true;
    },
    template: `
        <div v-if="loaded">
           <label>姓名：</label><span>{{name}}</span><br/>
           <label>年龄：</label><span>{{age}}</span>
        </div>
    `
})