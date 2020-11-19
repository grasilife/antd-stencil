module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'react', 'prettier'],
  extends: ['standard', 'prettier', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
  rules: {
    '@typescript-eslint/no-use-before-define': 0,
    'no-use-before-define': [0],
    'react/prop-types': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 0,
  },
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
    es6: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
}
