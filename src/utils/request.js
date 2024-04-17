import axios from 'axios';
import defaultConfig from '@/config/index';
import router from '@/router';
import { Modal } from 'ant-design-vue';

const {
  contentType,
  requestTimeOut,
  notErrorPage
} = defaultConfig;

/**
 * 错误处理 
 * http请求状态码不是200时进入此方法处理。
 * 注意http状态码与系统设定的业务状态码不是同一个参数。
 * 业务状态码在返回报文中，业务错误时，http状态码可以是200。业务错误统一处理，在响应拦截器设置。
 */
const errorHandler = (error) => {
  console.log('error', error);
  const response = error.response;
  if (response.data.code === 50105) { // 用户登录信息已失效，需重新登录
    Modal.warning({
      title: '登录信息已失效，请重新登录',
      onOk: () => {
        router.push({ path: '/login' });
      },
      okText: '确认'
    });
  } else {// 系统级别错误全部跳转到错误页
    router.push({ path: '/error' });
  }

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

    // 将上送参数data转换为FormData格式，使得后端直接取出字段，如果本身是FormData，则不需转换
    if (config.data && Object.prototype.toString.call(config.data) !== '[object FormData]') {
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
        if (token) {
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