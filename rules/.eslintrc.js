module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    "airbnb-typescript/base",
  ],

  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-await-in-loop': ['off'],

    // namespace の利用方法が確定するまで保留
    'no-inner-declarations': ['off'],

    // TypeScript のため不要
    'react/prop-types': ['off'],

    'no-alert': ['off'],
    'no-console': ['off'],

    'jsx-a11y/label-has-associated-control': ['error', { assert: "either" }],

    // 設計途中で export するものが一つしかないタイミングでエラーが出続けるので
    'import/prefer-default-export': ['off'],
  },
};
