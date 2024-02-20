import axios from 'axios';
import defaultConfig from '@/config/index';

const {
  contentType,
  requestTimeOut
} = defaultConfig;

// 错误处理
const errorHandler = (error) => {
  console.log('请求异常', error);
};

const request = axios.create({
  baseURL: '/',
  timeout: requestTimeOut,
  headers: {
    'Content-Type': contentType,
    Authorization: ''
  }
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    console.log('config', config);
    return config;
  }, errorHandler);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    console.log('responseData', response);
    return response;
  }, errorHandler);



export default request;