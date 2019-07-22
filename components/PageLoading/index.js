import React from 'react';
import styled from './index.less';
import { Spin } from 'antd';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class NoResult extends React.Component {
  render () {
    return (
      <div className={styled['com-wrapper']}>
        <Spin size="large" className={styled.loading} />
      </div>
    );
  }
}

export default connect()(NoResult);
