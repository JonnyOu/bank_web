import axios from 'axios';
import defaultConfig from '@/config/index';

const {
  contentType,
  requestTimeOut
} = defaultConfig;

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
  (requestData) => {
    console.log('requestData', requestData);
  }, errorHandler);

// 响应拦截器
request.interceptors.response.use(
  (responseData) => {
    console.log('responseData', responseData);
  }, errorHandler);

// 错误处理
const errorHandler = (error) => {
  console.log('请求异常', error);
};