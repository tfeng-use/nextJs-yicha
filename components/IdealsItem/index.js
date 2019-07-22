import React from 'react';
import styled from './index.less';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

var classNames = require('classnames');
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
    let {msg} = this.props;
    let imgPart;
    if (msg.netUrl) {
      imgPart = (
        <a className={styled['img-wrapper']} target="_blank">
          <img src="/static/default.png" data-src={msg.netUrl} className={classNames(styled.left, 'float_l', 'lazyload')} alt="易茶"/>
        </a>
      )
    } else {
      imgPart = (
        <a className={styled['img-wrapper']} target="_blank">
          <img src="/static/default.png" alt="易茶"/>
        </a>
      )
    }
    return (
      <div className={styled['com-wrapper']}>
      {
        imgPart
      }
      <h3>
        <a target="_blank">{msg.newsTitle}</a>
      </h3>
      <p className={styled.content}>
        <span>来自：{msg.author}</span>
        <span>{msg.updTime}</span>
        <span><Icon className={styled.icon} type="eye" />{msg.readCount}</span>
      </p>
      </div>
    );
  }
}

export default connect()(Item);
