import request from '@/utils/request'
export const getHomeSwipe = () =>
  request({
    url: '/home/swiper'
  })
export const getRentGroup = (area) =>
  request({
    url: '/home/groups',
    params: { area }
  })
