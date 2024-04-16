export async function api_updatePwdConf(data) {
  return request({
    url: '/updatePwd/updatePwdConf',
    method: 'post',
    data
  });
}

export async function api_updatePwdResult(data) {
  return request({
    url: '/updatePwd/updatePwdResult',
    method: 'post',
    data
  });
}