module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: [
    'standard',
    // According to the recommended configuration
    // See: https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    'prettier',
    'prettier/babel',
    'plugin:prettier/recommended',
    'prettier/standard',
  ],

  plugins: ['babel', 'standard'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
}
