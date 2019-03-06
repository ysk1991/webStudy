import Vue from 'vue/dist/vue.esm';

let vm = new Vue({
    el: '#div1',
    data: {
        result:0,
        a:1,
        b:2,
    }, 
    methods:{
        async fn_submit() {
            let form = this.$refs['form1']; 
            let formdata = new FormData(form);
            console.log(formdata)
            let res = await fetch(form.action, {
                method: form.action,
                body:formdata
            });
            let result = await res.json();
            this.result = result;
        }
    },
    template: `
        <div>
            <form ref='form1' @click.prevent='fn_submit()' action='data/sum.php' method='post'>
                <input type="text" name="a" v-model="a">
                <input type="text" name="b" v-model="b">
                <input type="submit" value="计算">
            </form>
           {{result}}
        </div>
    `
})