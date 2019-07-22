import request from '../utils/request';
import gloablObj from '../common/global'

// export function fetchList(obj) {
//   let requestObj = {
//     ...obj,
//     limit: gloablObj.ideaLimit,
//     orderByField: gloablObj.orderByField,
//     isAsc: gloablObj.isAsc
//   }
//   return request({
//     url: '/api/1ec08564dcc344018d6aaa910068f0f0/app/appBusinessOpportunity/page',
//     method: 'get',
//     params: requestObj
//   })
// }

export function fetchBusiness(obj) {
  let requestObj = {
    ...obj,
    limit: gloablObj.ideaLimit,
    orderByField: gloablObj.orderByField,
    isAsc: gloablObj.isAsc
  }
  return request({
    url: `${gloablObj.url}/getBusiness`,
    method: 'get',
    params: requestObj
  })
}
