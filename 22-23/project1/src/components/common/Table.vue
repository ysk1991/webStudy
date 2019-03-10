<template>
  <div>
    <table class="table">
      <thead>
        <th v-for="field in fields">{{field.text}}</th>
      </thead>
      <tbody>
        <tr v-for="data in datas">
            <td v-for="field in fields">{{data[field.name]}}</td>
            <a href="#" class="btn btn-danger" @click="fn_del(data.ID)">删除</a>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Table',
    props:['fields','datas','parent'],
    data() {
      return {

      }
    },
    methods:{
        fn_del(id){
            console.log(id);
            this.parent.del(id)
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
