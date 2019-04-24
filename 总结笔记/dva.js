
//1，创建dva实例
const app = dva();
//2，装载插件
app.use({})
//3,注册model
app.model(model);
//4,配置路由
app.router(router);
//5，启动应用
app.start("#root");

// 第三步  注册model
export default {
  //model总共五部分组成
  namespace: "common",
  state: {
    //初始化的数据
  },
  reducers: {
    //相当于redux的reducer
  },
  effects: {
    //redux进行异步处理的中间件（redux-saga原理）
    // dva-saga,主要用于model中effects的使用，其实就是基于redux-saga中间件的封装 ，而redux-saga是基于generator函数的，
    // 所以比redux-thunk更难理解一些，基本使用：https://redux-saga-in-chinese.js.org/docs/api/index.html
    *add1(action, { call, put }) {
      yield put({ type: "add" });
      yield call(delay, 1000);
      yield put({ type: "reduce" });
  }
  },
  subscriptions: {
    //订阅器（例如某个键盘键按下执行dispatch）,管理所有的组件，不是单一组件
  } 
}

//  第四步 配置路由

import { Router, Switch, Route } from 'dva/router'
import dynamic from 'dva/dynamic'
function RouterConfig({ history, app }) {
  const IndexPage = dynamic({
    app,
    component: () => import('./routes/IndexPage'),
  })
 
  const Users = dynamic({
    app,
    models: () => [import('./models/users')],
    component: () => import('./routes/Users'),
  })
 
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </Router>
  )
}




 