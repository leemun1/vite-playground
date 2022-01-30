<script setup>
import NavLink from './NavLink.vue';

// grabbed env vars from .env.*; vite only exposes vars with 'VITE_' prefix
const appMode = import.meta.env.VITE_APP_MODE;
</script>

<template>
  <div class="w-60 flex flex-col p-4 border-r-4 border-gray-100">
    <div class="flex items-center text-sm">
      ENV:
      <span class="rounded-full bg-yellow-400 w-min px-2 py-0.5 ml-2 capitalize">
        {{ appMode }}
      </span>
    </div>

    <div class="flex flex-col border-t-4 border-gray-100 mt-4">
      <NavLink path="/" name="Home" />
      <NavLink path="/companies" name="Companies" />
    </div>
  </div>
</template>

<style scoped></style>
