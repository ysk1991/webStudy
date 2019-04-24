import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Mod1 from './Cmp2_1';
import Mod2 from './Cmp2_2';

class Cmp2 extends Component{
  constructor(...args){
    super(...args);
    
    this.state={
      data:'aaa'
    }
  }

  componentDidUpdate(old_props,old_state){
    //  路由是 /new/1  /new/2  /new:id
    let old_id = old_props.match.params.id; 
    let id = this.props.match.params.id;
    // 判断是否有更改
    if(id != old_id){
      console.log('更新',id);
      this.setState({
        data:id==1?'aaa':'bbb'
      })
    }
  }
  render(){
    // 获取路由this.props.match.params.id 路由里面传递id值
    // let id = this.props.match.params.id;
    // return(
    //   <div>
    //     {this.state.data}
    //   </div>
    // )

    
    // 获取上一级路由  /new  相当于  /new/guoji  路由万一变了 内部嵌套路由就不需要更改
    const path=this.props.match.path;

    return (
      <div>
        <h2>新闻</h2>
        {/*  相当于  /new/guoji */}
        <Link to={`${path}/guoji`}>国际</Link>
        <Link to={`${path}/shehui`}>社会</Link>

        <Route path={`${path}/guoji`} component={Mod1} />
        <Route path={`${path}/shehui`} component={Mod2} />
      </div>
    );
  }
}

export default Cmp2;
