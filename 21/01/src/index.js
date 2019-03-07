import Vue from 'vue';
import Parent from './components/parent';

let vm = new Vue({
    el:'#div1',
    data:{},
    created (){
        console.log('created')
    },
    mounted(){
        console.log('mounted')
    },
    components:{
        Parent
    },
    template:`
        <div>
            <parent/>
        </div>
    `
})