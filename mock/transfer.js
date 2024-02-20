const RSP_HEAD = {
  TRAN_SUCCESS: '1',
  TRANCE_NO: '20111111',
  TRANCE_ID: '111'
};

export default [
  {
    url: '/test.do',
    type: 'post',
    response(options) {
      console.log('options', options);
      return {
        code: '200',
        msg: 'success',
        RSP_HEAD,
        RSP_BODY: {
          status: '1',
          text: 'greate!'
        }
      };
    }
  }
];