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
  }
  render () {
    let imgPart;
    let { msg } = this.props;
    if (msg.netUrl) {
      imgPart = (
        <a className="img-wrapper" target="_blank">
          <img src='/static/default.png' data-src={msg.netUrl} className={classNames(styled.left, styled['float_l'], 'lazyload')} alt="易茶"/>
        </a>
      )
    } else {
      imgPart = (
        <a className="img-wrapper" target="_blank">
          <img src="/static/default.png" className={classNames(styled.left, styled['float_l'])} alt="易茶"/>
        </a>
      )
    }
    return (
      <div className={styled['com-wrapper']}>
        { imgPart }
        <div className={styled.right}>
          <a>{msg.newsTitle}</a>
          <div className={styled.content}>
            {msg.abstract}
          </div>
          <p>
            <span>来自：{msg.author}</span>
            <span><Icon className={styled.icon} type="clock-circle" />{msg.updTime}</span>
            <span><Icon className={styled.icon} type="eye" />{msg.readCount}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default connect()(Item);
