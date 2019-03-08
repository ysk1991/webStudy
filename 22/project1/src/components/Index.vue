<template>
  <div>
    a:{{$store.state.a}}
    <Cmp1/>
    <Table
      :fields="fields" 
      :datas="datas"
      :parent="this"
    />
  </div>
</template>

<script>
  import Table from '@/components/common/Table';
  import Cmp1 from '@/components/Cmp1';
export default {
  name: 'Index',
  data () {
    return {
      fields:[
        {name:'ID',text:'ID'},
        {name:'name',text:'姓名'},
        {name:'age',text:'年龄'}
      ],
      datas:[
        {ID:1,name:'章三',age:1},
        {ID:2,name:'李四',age:2},
        {ID:3,name:'王五',age:3}
      ]
    }
  },
  components:{
    Table,
    Cmp1
  },
  methods:{ 
    del(id){
        this.datas = this.datas.filter(data=>data.ID!=id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
