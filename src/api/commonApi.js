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

export async function api_uploadFile(data) {
  return request({
    url: '/uploadFile',
    method: 'post',
    data
  });
}

export async function api_uploadFileMul(data) {
  return request({
    url: '/uploadFileMul',
    method: 'post',
    data
  });
}