import React from 'react';
import styled from './index.less';
import { Icon } from 'antd';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class NoResult extends React.Component {
  render () {
    let {content} = this.porps;
    return (
      <div className={styled['com-wrapper']}>
        <p className="no-data">{ content || '暂无数据' }<Icon type="exclamation" /></p>
      </div>
    );
  }
}

export default connect()(NoResult);
