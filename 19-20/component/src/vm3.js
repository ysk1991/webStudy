import Vue from "vue/dist/vue.esm";
import Cmp2 from "./cmp2";

let new_cmp = new Cmp2({
    propsData:{
        name:'章三',
        list:[1,2,3],
    }
});

let vm = new_cmp.$mount();
console.log(vm.$el);

let _html = vm.$el.querySelector('li').innerHTML;
console.log(_html)