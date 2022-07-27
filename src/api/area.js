import request from '@/utils/request'

export const cityList = (level) =>
  request({
    url: `/area/city?level=${level}`
  })

export const hotCityList = () =>
  request({
    url: '/area/hot'
  })
export const communitySearch = (name, id) =>
  request({
    url: '/area/community',
    params: { name, id }
  })
