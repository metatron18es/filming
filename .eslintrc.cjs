/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // sort them alphabetically please
    'arrow-body-style': ['error', 'always'],
    'class-methods-use-this': 'off',
    'import/prefer-default-export': [0],
    'max-len': ['error', { code: 140 }],
    'no-underscore-dangle': [0],
    "semi": [2, "always"],
  },
};
