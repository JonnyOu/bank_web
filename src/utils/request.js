import axios from 'axios';
import defaultConfig from '@/config/index';

const {
  contentType,
  requestTimeOut,
} = defaultConfig;

// 错误处理
const errorHandler = (error) => {
  console.log('请求异常', error);
};

const instance = axios.create({
  baseURL:  defaultConfig.baseApi,
  timeout: requestTimeOut,
  headers: {
    'Content-Type': contentType,
  }
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 请求时携带将token放进请求头Authorization，用户后端校验用户登录
    config.headers.Authorization = localStorage.getItem('Authorization');
    return config;
  }, errorHandler);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
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