// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      "no-console": 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    }
  }
)
