export const useRegisterStore = defineStore({
  id: 'useRegisterStore',
  state: () => ({
    token: '', // token
  }),
  getters: {

  },
  actions: {
    async register(params) {
      const { data } = await api_register(params);
      return data;
    }
  }
});