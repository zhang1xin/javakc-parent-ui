import request from '@/utils/request'

const api_name = '/mes/dispordrls'
export default {
  // 查询列表数据
  findPageDispOrdRls(dispOrdRlsQuery, pageNum, pageSize) {
    return request({
      url: `${api_name}/${pageNum}/${pageSize}`,
      method: 'post',
      data: dispOrdRlsQuery
    })
  },
  // 回显
  view(dispOrdRlsId) {
    return request({
      url: `${api_name}/${dispOrdRlsId}`,
      method: 'get'
    })
  }
}
