export const nameRule = [
  { required: true, message: '请输入账号' },
  { pattern: /^[a-zA-Z]\w{4,15}$/, message: '账号不合法' }
]

export const passwordRule = [
  { required: true, message: '请输入密码' },
  {
    pattern: /\S{6,}/,
    message: '请输入6位以上密码'
  }
]
