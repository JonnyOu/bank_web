export const useSelfBankOnLocalStore = defineStore({
  id: 'useSelfBankOnLocalStore',
  state: () => ({
    info: '本行转账info',
    title: 'xxxxxxx'
  }),
  getters: {

  },
  actions: {
    async test(params) {
      const { data } = await api_test(params);
      return data;
    }
  }
});