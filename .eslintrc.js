module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'google',
    'plugin:jest/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: { version: 'detect' },
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'object-curly-spacing': 'off',
    'array-bracket-spacing': 'off',
    'computed-property-spacing': 'off',
    'semi': 'off',
    'indent': ['error', 2],
  },
  overrides: [
    {
      files: ['.eslintrc.js'],
      env: { node: true },
    },
  ],
}
