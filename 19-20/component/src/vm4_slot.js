import Vue from "vue/dist/vue.esm";
import mySolt from "./slot.js"


// slot可以写一个组件
let vm = new Vue({
    el: '#div1',
    data: {}, 
    template: ` 
        <div>
            <mySolt>
                <template slot="title">标题1</template>
                这是一个提示
            </mySolt>
        </div>
    `

})