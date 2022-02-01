import { defineStore, acceptHMRUpdate } from 'pinia';

export const useAuthStore = defineStore('auth', {
  // convert to a function
  state: () => ({
    firstName: '',
    lastName: '',
    userId: null,
  }),
  getters: {
    // firstName getter removed, no longer needed
    fullName: state => `${state.firstName} ${state.lastName}`,
    loggedIn: state => state.userId !== null,
    // must define return type because of using `this`
    fullUserDetails(state) {
      return {
        ...state,
        // other getters now on `this`
        fullName: this.fullName,
      };
    },
  },
  actions: {
    // no context as first argument, use `this` instead
    async loadUser(id) {
      if (this.userId !== null) throw new Error('Already logged in');

      console.log('id', id);
      //   const res = await api.user.load(id);
      //   this.updateUser(res);
    },
    // mutations can now become actions, instead of `state` as first argument use `this`
    updateUser(payload) {
      this.firstName = payload.firstName;
      this.lastName = payload.lastName;
      this.userId = payload.userId;
    },
    // easily reset state using `$reset`
    clearUser() {
      this.$reset();
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
