<template>
  <div>
      <input type="button" value="显示隐藏" @click="b=!b">
      <!-- transition只能用于单独一个元素 -->
      <!-- <transition name="fadeUp">
        <div class="box" v-if="b"></div>     
      </transition> -->
      <transition-group name="bounce" tag="ul" class="list" >
          <!--  -->
          <li v-for="item,index in arr" :key="item.id" >
            {{item.num}}    <a href="#" @click="del(index)">删除</a>
          </li>
      </transition-group>
      </ul>
  </div>
</template>

<script> 
  export default {
    name: 'animate', 
    data() {
      return {
        b:true,
        arr:[{id:1,num:22},{id:2,num:24}]
      }
    },
    methods:{
         del(index){
             this.arr.splice(index,1);
         }
    }
  }
</script>

<style scoped>
    .box{
        width: 200px;
        height: 200px;
        background: #ccc;
        animation-duration: 1s;
    }
    .list li{
        width: 50px;
        height: 50px;
        background: #ccc;
        margin-right: 10px;
        list-style: none;
        float: left;
    }
</style>
