import { defineStore } from 'pinia';

export const usePhoneServiceStore = defineStore({
  id: 'usePhoneServiceStore',
  state: () => ({
    
  }),
  getters: {

  },
  actions: {
    // 获取用户手机号码
    async getUserPhone() {
      const { data } = await api_getUserPhone();
      return data;
    },
  }
});