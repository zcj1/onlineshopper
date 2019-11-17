import {request} from "./request"

export function getHomeMultidataReq() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoodsReq(type,page){
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}