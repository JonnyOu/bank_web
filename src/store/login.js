export const useLoginStore = defineStore({
  id: 'useLoginStore',
  state: () => ({
    token: '', // token
  }),
  getters: {

  },
  actions: {
    async login(params) {
      const { data } = await api_login(params);

      return data;
    }
  }
});