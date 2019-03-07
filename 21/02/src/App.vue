<template lang="html">
    <div id="div1">
        <router-link :to="{name:'user',params:{}}">首页</router-link>
        <router-link :to="{name:'news',params:{}}">新闻</router-link>
        <router-view></router-view>
    </div>
</template>
<script> 
export default {
    name:'app',
    components:{
    },
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
    #div1{
        width: 100px;
        height: 100px;
        font-size: 20px;
    }
</style>

