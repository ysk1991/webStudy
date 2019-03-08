// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;


// 添加到vue身上
Vue.use(Vuex);
// 声明store对象
const store = new Vuex.Store({
  //严格模式：防止直接修改state 只在开发阶段为true,发布出去用false，否则会检查运行很慢
  strict:process.env.NODE_ENV!='production',  
  state:{
    a:1,
    b:2
  }, 
  // 可以直接调用mutationsl里面的方法改变state $store.commit('add',5);
  // 一般不这样做 一般通过actions调用mutations里面的方法
  mutations:{
    add(state,n){
      state.a += n;
    }
  },
  actions:{
    // 参数context相当于store
    sunAdd(context,n){
      // 给自己commit一个add方法 
      context.commit('add',n);
    }
  },
  getters:{

  },
  // 将state对象拆分成很多命名空间来用 比如用户相关 user
  modules:{

  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
