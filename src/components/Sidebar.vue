<script setup>
import { computed } from 'vue';
import NavLink from './NavLink.vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const fullName = computed(() => authStore.fullName);

// grabbed env vars from .env.*; vite only exposes vars with 'VITE_' prefix
const appMode = import.meta.env.VITE_APP_MODE;

function someMethod() {
  console.log('does this work?');
  authStore.updateUser({
    firstName: 'Mike',
    lastName: 'Lee',
    userId: '123',
  });
}
</script>

<template>
  <div class="w-60 flex flex-col p-4 border-r-4 border-gray-100">
    <div class="flex items-center mb-4">
      {{ fullName }}
      <button
        type="button"
        className="ml-auto inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        @click="someMethod"
      >
        Logout
      </button>
    </div>
    <div class="flex items-center text-sm border-t-4 border-gray-100 py-4">
      ENV:
      <span class="rounded-full bg-yellow-400 w-min px-2 py-0.5 ml-2 capitalize">
        {{ appMode }}
      </span>
    </div>

    <div class="flex flex-col border-t-4 border-gray-100">
      <NavLink path="/" name="Home" />
      <NavLink path="/companies" name="Companies" />
    </div>
  </div>
</template>

<style scoped></style>
