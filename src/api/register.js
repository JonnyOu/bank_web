export async function api_register(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data
  });
}