<script setup>
defineProps({
  msg: String,
});
</script>

<template>
  <div class="w-60 bg-slate-200 flex flex-col">
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </div>
</template>

<style scoped></style>
