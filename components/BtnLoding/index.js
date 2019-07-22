import React from 'react';
import styled from './index.less';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BtnLoading extends React.Component {
  static propTypes = {
    news: PropTypes.bool,
    btnLoading: PropTypes.bool,
    handleBtn: PropTypes.func,
    isIdeal: PropTypes.bool,
  }
  render () {
    let {isMore, btnLoading, handleBtn, isIdeal} = this.props;
    return (
      <div className={styled['com-wrapper']}>
        <Button 
          className={isIdeal?styled['ant-btn-danger-ideal']:styled['ant-btn-danger']}
          type="danger"
          loading={btnLoading}
          disabled={!isMore}
          onClick={()=>{handleBtn()}}
        >
          {isMore?'点击加载更多':'没有更多数据'}
        </Button>
      </div>
    );
  }
}

export default connect()(BtnLoading);
