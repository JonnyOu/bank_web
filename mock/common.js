const RSP_HEAD = {
  TRAN_SUCCESS: '1',
  TRANCE_NO: '20111111',
  TRANCE_ID: '111'
};

export default [
  {
    url: '/sendSms',
    type: 'post',
    response(options) {
      console.log('options', options);
      return {
        code: 20000,
        msg: 'success',
        data: {
          smsNo: '1234'
        }
      };
    }
  },
  {
    url: '/user/getPublicKeyIndex',
    type: 'post',
    response(options) {
      console.log('options', options);
      return {
        code: 20000,
        msg: 'success',
        data: {
          publicKeyIndex: '0'
        }
      };
    }
  }
];