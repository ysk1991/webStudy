
import Vue from "vue/dist/vue.esm";
import Cmp2 from "./cmp2";



let vm = new Vue({
    el: '#div1',
    data: {
        type: Cmp2
    },
     //此为父组件
    // template: ` 
    //     <div>
    //         <cmp2 name="blue" age="1" :list='[1,2,3]'/>
    //     </div>
    // `,
    template: ` 
        <div>
        
            <component :is="type" name="blue" age="1" :list='[1,2,3]'/>
        </div>
    `

})