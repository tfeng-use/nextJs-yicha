import request from '../utils/request';
import gloablObj from '../common/global'
// export function fetchList() {
//   return request('/api/users');
// }

// export function fetchList(obj) {
//   let requestObj = {
//     ...obj,
//     limit: gloablObj.limit,
//     orderByField: gloablObj.orderByField,
//     isAsc: gloablObj.isAsc
//   }
//   return request({
//     url: '/api/1ec08564dcc344018d6aaa910068f0f0/app/appNews/page',
//     method: 'get',
//     params: requestObj
//   })
// }

export function fetchNews(obj) {
  let requestObj = {
    ...obj,
    limit: gloablObj.limit,
    orderByField: gloablObj.orderByField,
    isAsc: gloablObj.isAsc
  }
  return request({
    url: `${gloablObj.url}/getNews`,
    method: 'get',
    params: requestObj
  })
}
