module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  extends: ['airbnb-base', 'eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    strict: 'off',
    semi: ['error', 'never'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'class-methods-use-this': 'off',
    'no-param-reassign': ['error', { props: false }],
    'global-require': 'off',
    'object-curly-newline': ['error', { multiline: true }],
    'arrow-parens': ['error', 'as-needed'],
    'array-callback-return': ['error', { allowImplicit: true }],
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }]
  },
  globals: { window: true }
  // settings: {
  //   'import/resolver': {
  //     alias: true
  //   }
  // }
}
