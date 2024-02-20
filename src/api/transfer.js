export async function api_test(data) {
  return request({
    url: 'test.do',
    method: 'post',
    data
  });
}