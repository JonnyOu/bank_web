export default [
  {
    url: '/updatePwd/updatePwdConf',
    type: 'post',
    response(options) {
      console.log('options', options);
      return {
        code: 20000,
        msg: 'success',
      };
    }
  },
  {
    url: '/updatePwd/updatePwdResult',
    type: 'post',
    response(options) {
      console.log('options', options);
      return {
        code: 20000,
        msg: 'success',
      };
    }
  },
];