import axios from 'axios';
import defaultConfig from '@/config/index';
import router from '@/router';

const {
  contentType,
  requestTimeOut,
  notErrorPage
} = defaultConfig;

// 错误处理
const errorHandler = (error) => {
  console.log('请求异常', error);
};

const instance = axios.create({
  baseURL:  defaultConfig.baseApi,
  timeout: requestTimeOut,
  withCredentials: true, // 发送cookie
  headers: {
    'Content-Type': contentType,
  }
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 请求时携带将token放进请求头Authorization，用户后端校验用户登录
    config.headers.Authorization = localStorage.getItem('Authorization');

    // 将上送参数data转换为FormData格式，使得后端直接取出字段
    if (config.data) {
      const params = new FormData();
      Object.keys(config.data).forEach((key) => {
        params.append(key, config.data[key]);
      });
      config.data = params;
    }

    return config;
  }, errorHandler);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {

    // 统一处理，如果code不是20000，且不在自行错误处理数组中，默认跳转到错误页
    const resCode = response.data.code;
    const reqUrl = response.request.responseURL.split('api');
    const apiUrl = reqUrl[1];
    if (resCode !== 20000) {
      let flag = false;
      for (let index = 0; index < notErrorPage.length; index++) {
        const element = notErrorPage[index];
        if (apiUrl === element) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        // 根据登录状态去到不同错误页
        const token = localStorage.getItem('Authorization');
        if (token && resCode !== 50003) {
          router.push({ path: '/errorResult' });
        } else {
          router.push({ path: '/error' });
        }
      }
    }

    return response;
  }, errorHandler);


const request = (options) => {
  if (defaultConfig.env === 'production') {
    instance.defaults.baseURL = defaultConfig.baseApi;
  } else {
    const isMock = defaultConfig.isMock;
    instance.defaults.baseURL = isMock === 'true' ? defaultConfig.mockApi : defaultConfig.baseApi;
  }
  return instance(options);
};

export default request;