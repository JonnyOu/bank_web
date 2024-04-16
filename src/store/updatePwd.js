export const useUpdatePwdStore = defineStore({
  id: 'useUpdatePwdStore',
  state: () => ({
  }),
  getters: {

  },
  actions: {
    // 更新密码确认页
    async updatePwdConf(params) {
      const { data } = await api_updatePwdConf(params);
      return data;
    },
    // 更新密码结果页
    async updatePwdResult(params) {
      const { data } = await api_updatePwdResult(params);
      return data;
    },
  }
});