import React from 'react';
import styled from './index.less';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { routerRedux } from 'dva/router'; 
import BaseMsg from '../BaseMsg/index'
// var classNames = require('classnames');
class Item extends React.Component {
  static propTypes = {
    msg: PropTypes.object
  }
  // constructor (props) {
  //   super(props);
  // }
  handleLink (path, e) {
    e.preventDefault();
    // this.props.dispatch(routerRedux.push(path))
  }
  render () {
    let imgPart;
    let { msg } = this.props;
    if (msg.files && msg.files.length > 0) {
      imgPart = msg.files.map((item , index)=> {
        return (
          <div className={styled['img-wrapper']} key={index}>
            <img src="/static/default.png" data-src={item} className="lazyload" alt="易茶" />
          </div>)
      })
    }
    return (
      <div className={styled['com-wrapper']}>
          <h3>
          <a target="_blank">
            {msg.title}
          </a>
        </h3>
        <BaseMsg msg={msg}></BaseMsg>
        <p className={styled.content}>{msg.content}</p>
        <div className={styled.imgs}>
          {
            imgPart
          }    
        </div>

      </div>
    );
  }
}

export default connect()(Item);
