<template>
    <div>
        <input type="button" value="+5" @click="fn()">
    </div>
</template>
<script>
    export default{
        name:'cmp1',
        data(){
            return {
                
            }
        },
        methods:{
          fn(){
            // this.$store.commit('add',5); 不推荐
            this.$store.dispatch('sunAdd',7);
          }  
        }
    }
</script>