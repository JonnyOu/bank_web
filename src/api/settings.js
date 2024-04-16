export async function api_getUserPhone() {
  return request({
    url: '/settings/phoneService/getUserPhone',
    method: 'post',
  });
}