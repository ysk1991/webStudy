import Vue from 'vue';

export default Vue.component('child', {
    props: ['parentAgv'],
    data(){
        return {
            num:0
        }
    },
    template: `
        <div>
                子级
                 {{num}}
                 <input type="button" value="+5" @click="parentFn()"/>
        </div>
    `,
    created(){
        this.$on('add_num',function(n){
            this.num += n;
        })
    },
    methods:{
        sumNum(){
            this.num++
        },
        parentFn(){
            console.log(this.parentAgv)
            // this.parentAgv.parentNum += 5;
            this.parentAgv.addParent()
        }
    }
})