// 如何使用多个store 有子都store 在modules里面定义 里面都state是分开的
//  但是子store里面的mutations跟actions是不分开的 如果名字相同要执行就一起执行 不会区分
export default{
  state: {
    str: 'store_a'
  },
  //没有自己的空间 类似事件绑定 要出来就都出来 如果两个store写里一样的mutations都一起调用
  mutations: {
    setStr(state, s) {
      // alert('a的mutations');
      state.str = s;
    }
  },
  actions: {
    setStr({
      commit
    }, s) {
      commit('setStr', s);
    }
  }
};