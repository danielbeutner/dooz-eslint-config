const base = require('@dooz/eslint-config-base')

const parserOptions = {
  ...base.parserOptions,
  ecmaFeatures: {
    jsx: true,
  },
}

module.exports = {
  extends: [
    '@dooz/eslint-config-base',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier/react',
  ],

  plugins: ['jsx-a11y', 'react', 'react-hooks'],

  parserOptions: parserOptions,

  settings: {
    react: {
      version: 'detect',
    },
  },

  overrides: [
    {
      extends: ['prettier/@typescript-eslint'],

      files: ['**/*.ts?(x)'],

      parser: '@typescript-eslint/parser',

      parserOptions: {
        ...parserOptions,

        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },

      plugins: ['@typescript-eslint/eslint-plugin'],

      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
      },
    },
  ],
}
