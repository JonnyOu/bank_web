export const useLoginStore = defineStore({
  id: 'useLoginStore',
  state: () => ({
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