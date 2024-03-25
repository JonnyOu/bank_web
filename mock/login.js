const RSP_HEAD = {
  TRAN_SUCCESS: '1',
  TRANCE_NO: '20111111',
  TRANCE_ID: '111'
};

export default [
  {
    url: '/login',
    type: 'post',
    response(options) {
      console.log('options', options);
      return {
        code: '200',
        msg: 'success',
        data: {
          token: 'fa2e1c55595f7adf4bc3eb6b60f7489c'
        }
      };
    }
  }
];