// 局部组件
import Vue from "vue/dist/vue.esm";

let vm = new Vue({
    el: '#div1',
    data: {},
    template: '<div><cmp1/></div>',
    // 局部组件
    components: {
        cmp1: {
            // 组件内部 data必须用函数形式 data() 然后retrun
            // data() 因为函数可以把跟全局的变量隔开 目的可以干干净净的
            data() {
                return {
                    a: 11
                }
            },
            template: '<div>{{a}}</div>'
        }
    }
})