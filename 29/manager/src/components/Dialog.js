import React, {Component} from 'react';
import './Dialog.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Dialog extends Component{
  constructor(...args){
    super(...args);

    this.state={
      show: false   // 是否出现
    };
    this.callback=null; //回调函数
  }

  open(fn){   　　// 首现打开操作框 获取到父组件的回调事件绑定到自己的state里
    this.callback=fn;
    this.setState({
      show: true
    });
  }
  close(){    //关闭操作框
    this.setState({
      show: false
    });
  }

  fnClick(index){   //执行按钮的事件 回调事件写在父组件里
    this.callback && this.callback(index);
    this.close();
  }

  render(){
    return (
      <div style={{display: this.state.show?'block':'none'}}>
        <div className="my-dialog-shadow"></div>
        <div className="panel panel-default my-dialog">
          <div className="panel-heading">
            <div className="panel-title">
              {this.props.title}
            </div>
          </div>
          <div className="panel-body">
            {this.props.msg}
          </div>
          <div className="panel-footer">
            <div className="btn-group">
              {this.props.buttons.map((button,index)=>(
                <button 
                  type="button" 
                  className="btn btn-default btn-sm" 
                  key={index} 
                  onClick={this.fnClick.bind(this, index)}
                >
                  {button.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dialog;
