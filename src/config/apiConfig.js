/**
 * api配置
 */

// 当前环境
const env = import.meta.env.VITE_ENV_NAME;
// mock开关
const isMock = import.meta.env.VITE_MODE_MOCK;
// envConfig
const envConfig = {
  'development': {
    baseApi: '/api',
    mockApi: '/'
  },
  'production': {
    baseApi: '/api',
    mockApi: '/'
  }
};

export default {
  env,
  isMock,
  ...envConfig[env]
};