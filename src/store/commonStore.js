export const useCommonStore = defineStore({
  id: 'useCommonStore',
  state: () => ({
    menu: [],
    path: '',
    defaultSelectMenu: '',
    step: 0, // 子功能可能有多个页面，此字段记录当前所在页面
  }),
  getters: {
    
  },
  actions: {
    // 子功能中做页面跳转，做统一管理
    jumpStep(step) {
      this.step = step;
    },
    // 发送短信验证码
    async sendSms(params) {
      const { data } = await api_sendSms(params);
      return data;
    },
    // 获取秘钥index
    async getPublicKeyIndex() {
      const { data } = await api_getPublicKeyIndex();
      return data;
    },
  }
});