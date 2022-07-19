import request from '@/utils/request'
export const findHouse = (id) =>
  request({
    url: `/houses/condition?id=${id}`
  })
