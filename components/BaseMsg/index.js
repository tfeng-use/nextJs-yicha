import React from 'react';
import styled from './index.less';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BaseMsg extends React.Component {
  static propTypes = {
    msg: PropTypes.object
  }
  // constructor (props) {
  //   super(props);
  // }
  render () {
    let { msg } = this.props;
    return (
      <div className={styled['com-wrapper']}>
        {
          msg.userHeaderImg?<img src={msg.userHeaderImg} alt="易茶"/>:<img src="../../assets/mr.png" alt="易茶"/>
        }
        <span className={styled.name}>{msg.crtUserName}</span>
        {
          msg.crtUserAuthState === '10'?(<span><img className={styled.mark} src="./mark.png" alt=""/>已认证</span>):null
        }
        <span className={styled.time}>{msg.updTime}</span>
      </div>
    );
  }
}

export default connect()(BaseMsg);
