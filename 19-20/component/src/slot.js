import Vue from "vue/dist/vue.esm"; 
import "bootstrap/dist/css/bootstrap.css";
import './css/mySlot.css'
export default Vue.component('mySolt',{
    data(){
        return{}
    },
    template:`
        <div class="panel panel-default my-dialog">
            <div class="panel-heading"><slot name="title"/></div>
            <div class="panel-body"><slot/></div>
        </div>
    `
})