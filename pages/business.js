import Layout from '../components/Layout/index'
import React from 'react';
import { connect } from 'react-redux';
import Item from '../components/BusinessItem/index'
import {getListAction} from '../store/business/index'
import NoReault from '../components/NoResult/index'
import PageLoading from '../components/PageLoading/index'
import BtnLoading from '../components/BtnLoding/index'
import styled from '../style/common.less'
let name = 'business';

class Business extends React.Component {
  static propTypes = {}
  constructor (props) {
    super(props);
    this.state = {
      btnLoading: false
    }
  }
  componentDidMount () {
    let {list, isMore, page} = this.props;
    if (list.length === 0 && isMore) {
      let obj = {
        page: page,
      }
      this.props.getList(obj);
    }
  }
  componentDidUpdate (prevProps) {
    // 如果列表数组的长度发生变化，那么说明更新完成
    if (this.props.list.length !== prevProps.list.length) {
      this.setState({
        btnLoading: false
      })
    }
  }
  handleBtn () {
    let {page} = this.props;
    let obj = {
      page: page + 1,
    }
    this.setState({
      btnLoading: true
    })
    this.props.getList(obj);
  }
  render () {
    let itemList = null;
    let {list, isMore} = this.props;
    let {btnLoading} = this.state;
    let pageLoading = null;
    if (list.length > 0) {
      itemList = list.map(item => {
        return <Item key={item.id} msg={item}></Item>
      })
    }
    if (list.length === 0 && !isMore) {
      itemList = (<NoReault/>)
    }
    pageLoading = list && list.length===0 && isMore?<PageLoading />:null; 
    return (
      <Layout>
        <div className={styled.w}>
          {
            pageLoading
          }
          <div className="list-wrapper">
            {
              itemList
            }
          </div>
          {
            itemList && itemList.length>0?<BtnLoading handleBtn={this.handleBtn.bind(this)} btnLoading={btnLoading} isMore={isMore}/>:null
          }
        </div>
      </Layout>
    )
  }
}
function mapStateToProps (state) {
  const props = state[name];
  return {
    list: props.list,
    page: props.page,
    isMore: props.isMore,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getList (obj) {
    dispatch(getListAction(obj));
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Business);
