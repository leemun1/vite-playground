<script setup>
defineProps({
  path: {
    type: String,
    default: '/',
  },
  name: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <router-link :to="path" class="pl-1 pt-2">{{ name }}</router-link>
</template>

<style scoped></style>
