// 不需要登录可访问的路由
const unLoginPath = [
  '/login',
  '/register',
  '/updatePwd',
  '/error'
];

// 返回请求code不是20000时，以下请求不跳转错误页，由业务代码自行处理
const notErrorPage = [
  '/sendSms',
  '/user/login',
  '/user/register',
  '/updatePwd/updatePwdResult'
];

export default {
  unLoginPath,
  notErrorPage
};