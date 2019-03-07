<template>
    <div id="div1">new
    </div>
</template>
<script>

export default {
    props:['name'],
    name:'news',
    data(){
        return{
            
        }
    },
    async created(){
        // let res = await this.axios.get('http://localhost:8080/data/1.json');
        // let res = await this.$http.get('http://localhost:8080/data/1.json');
        // console.log(res);
        let res = await fetch('http://localhost:8080/data/1.json');
        console.log(await res.json())
    },
    methods:{

    }
}
</script>
<style scoped>
    #div1{
        font-size: 30px;
    }
</style>

