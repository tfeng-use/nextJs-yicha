import { fetchIdeals as fetchList} from '../../services/ideals';
import { IdealsAdapt as ItemAdapt } from '../../common/adaptation'

// types
const name = 'cultureIdeal'
export const GETLIST = `${name}/getList`
export const LIST = '${name}/ideals'

// action
const getList = (value) => ({
  type: LIST,
  value: {...value}
})

export const getListAction = (arg) => {
  return (dispatch) => {
    fetchList(arg).then(res => {
      let data = res.data;
      data.rows = data.rows.map(item => {
        return new ItemAdapt(item);
      })
      let obj = {
        rows: data.rows,
        page: arg.page,
        total: data.total,
      }
      dispatch(getList(obj))
    })
  }
}


// reducer
let defaultState = {
  list: [],
  page: 1,
  isMore: true,
}
export let reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LIST:
      let data = action.value;
      let list = state.list.concat(data.rows);
      return {
        ...state,
        list: list,
        page: data.page,
        isMore: list.length < data.total?true:false,
      };
    default: return state
  }
}