import React from 'react';
import styled from './index.less';
import Router from 'next/router'

var classNames = require('classnames');
class Header extends React.Component {
  // constructor (props) {
  //   super(props);
  // }
  handleLink (path, e) {
    e.preventDefault();
    Router.push(path);
  }
  render (props) {
    return (
      <div id="head" className={styled.uiHeader}>
        <div className={styled.w}>
          <a onClick={(e) => this.handleLink('/',e)} className={classNames(styled['logo-wrapper'], styled['float_l'])}>
            <img src="/static/logo.png" alt="logo"/>
          </a>
          <ul className={classNames(styled['list-wrapper'], styled['float_l'])}>
            <li><a onClick={(e) => this.handleLink('/cultureIdeal',e)}>文创</a></li>
            <li><a onClick={(e) => this.handleLink('/business',e)}>商机列表</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
Header.propTypes = {
};

export default Header;
