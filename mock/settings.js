const RSP_HEAD = {
  TRAN_SUCCESS: '1',
  TRANCE_NO: '20111111',
  TRANCE_ID: '111'
};

export default [
  {
    url: '/settings/phoneService/getUserPhone',
    type: 'post',
    response(options) {
      console.log('options', options);
      return {
        code: 20000,
        msg: 'success',
        data: {
          phone: '13326501311'
        }
      };
    }
  }
];