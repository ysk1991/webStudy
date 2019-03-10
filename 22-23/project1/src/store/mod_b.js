export default{
  state: {
    str: 'store_b'
  },
  //没有自己的空间 类似事件绑定 要出来就都出来 如果两个store写里一样的mutations都一起调用
  mutations: {
    setStr(state, s) {
      // alert('b的mutations');
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