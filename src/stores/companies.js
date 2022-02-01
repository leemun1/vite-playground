import { defineStore, acceptHMRUpdate } from 'pinia';

export const useCompaniesStore = defineStore('companies', {
  // convert to a function
  state: () => ({
    companies: null,
  }),
  actions: {
    async loadCompanies() {
      if (this.userId !== null) throw new Error('Already logged in');

      //   const res = await api.companies.load(id);
      //   this.updateCompanies(res);
    },
    updateCompanies(companies) {
      this.companies = companies;
    },
    updateCompany(companyKey, payload) {
      console.log('Yo update this company', companyKey, payload);
    },
    clearCompanies() {
      this.$reset();
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCompaniesStore, import.meta.hot));
}
