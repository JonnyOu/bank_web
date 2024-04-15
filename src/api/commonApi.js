export async function api_sendSms(data) {
  return request({
    url: '/sendSms',
    method: 'post',
    data
  });
}

export async function api_getPublicKeyIndex() {
  return request({
    url: '/user/getPublicKeyIndex',
    method: 'post',
  });
}