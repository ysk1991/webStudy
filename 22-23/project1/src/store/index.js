import Vue from 'vue';
import Vuex from 'vuex';
import modA from './mod_a';
import modB from './mod_b';

Vue.use(Vuex); 


// 声明store对象
export default new Vuex.Store({
  //严格模式：防止直接修改state 只在开发阶段为true,发布出去用false，否则会检查运行很慢
  strict: process.env.NODE_ENV != 'production',
  state: {
    a: 3,
    b: 4,
    users:[]
  },
  // 可以直接调用mutationsl里面的方法改变state $store.commit('add',5);  不推荐
  // 不过一般不这样做 一般通过actions调用mutations里面的方法
  // 在mutations 里面写方法  然后在actions里面被调用
  //mutations用途： 请求来的数据通过mutations设置到state里
  mutations: {
    addA(state, n) {
      state.a += n;
    },
    addB(state, n) {
      state.b += n;
    },
    setOnline(state,id){
      state.users.forEach(users=>{
        if(users.id==id){
          users.online=true;
        }
      })
    },
    setUsers(state,users){    
      state.users=users;
    }
  },
  //可以在actions里面获取数据
  actions: { 
    addA({commit}, n) {
      commit('addA',n)
    },
    addB({commit}, n) {
      commit('addB', n)
    },
    setOnline({commit},id){
      commit('setOnline',id)
    },
    async readUser({commit}){ //从数据库请求数据
      let res = await fetch('http://localhost:8081/user.txt');
      let users = await res.json();
      console.log(users);
      commit('setUsers',users); //  commit到mutations里的方法
    }
  },
  //操作state的数据的函数写在getters里面
  // 当数据变化 会执行
  getters: {     
    count(state){
      return state.a + state.b;
    },
    onlineUsers(state){
      return state.users.filter(users=>users.online)
    }
  },
  // 将state对象拆分成很多命名空间来用 比如用户相关 user  分成多个store 但是mutations跟actions不能拆分
  // 可以在mapState里面映射出去
  modules: {
    mod_a: modA,
    mod_b: modB
  }
})
 