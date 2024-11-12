// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    css: true,
    html: true,
  },
  unocss: true,
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prefer-promise-reject-errors': 'off',
  },
})
