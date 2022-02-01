module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    // override/add rules settings here, such as:
    'no-unused-vars': 'warn',
    'vue/script-setup-uses-vars': 'error',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
  },
};
