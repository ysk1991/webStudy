import Vue from 'vue';
import Child from './child';
export default Vue.component('parent',{
    data(){
        return {
            parentNum:0
        }
    },
    components:{
        Child
    },
    template:`
        <div>
            <span>父级:{{parentNum}}</span>
            <input type="button" value="+1" @click="emit()"/>
            <Child ref='child1' :parentAgv="this" />
        </div>
    `,
    methods:{
        fn(){
            // console.log(this.$refs.child1.num++);        // 可以直接操作子组件的属性
            // this.$refs.child1.sumNum();              // 可以直接操作子组件的方法 
        },
        addParent(){
            // this.parentNum += 5;
        },
        emit(){
            this.$refs.child1.$emit('add_num',1);
        }
    }
})