<template>
  <div>
    <div>{{a}}</div>
    <div>{{b}}</div>
    <div>{{count}}</div>
    <!-- <div>{{count}}</div> -->
    <input type="button" value="+5" @click="addA(5)">
    <input type="button" value="+6" @click="addB(6)">
    <input type="button" value="让bbb上线" @click="setOnline(5)">
    <!-- <Cmp1/> -->
    <Table
      :fields="fields" 
      :datas="datas"
      :parent="this"
    />

    <ul>
      <li v-for="user in onlineUsers">
        姓名：{{user.name}}
        年龄：{{user.age}}
      </li>

      <div>
       str:{{$store.state.str}}  <br>
       b_str:{{$store.state.mod_b.str}} <br>
       a_str:{{str_a}} <br>
       </div>

    </ul>
    <adnimate></adnimate>
  </div>
</template>

<script>
import Table from '@/components/common/Table';
import Cmp1 from '@/components/Cmp1';
import adnimate from '@/components/animate';
import {mapState,mapActions,mapGetters} from 'vuex';
export default {
  name: 'Index',
  async created(){
    console.log(mapState(['a','b']));
    await this.readUser();
    console.log(this.$store.state);
    this.setStr('asdasd');
  },
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
    Cmp1,
    adnimate
  },
  methods:{ 
    ...mapActions(['addA','addB','setOnline','readUser']),
    ...mapActions(['setStr']),
    del(id){
        this.datas = this.datas.filter(data=>data.ID!=id);
    }
  },
  computed:{
    ...mapGetters(['count','onlineUsers']),
    ...mapState(['a','b']),
    // mapState相当于给我加了两个函数  映射
    // a(){
    //   return this.$store.state.a;
    // },
    // b(){
    //   return this.$store.state.b;
    // },
    ...mapState({   //如何使用vuex里面的多个store 在vuex里面的module
      str_a:state=>state.mod_a.str, 
      str_b:state=>state.mod_b.str,
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
