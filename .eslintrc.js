module.exports = {
  root: true,
  extends: [
    "./rules/.eslintrc.js",
  ],

  parserOptions: {
    project: './tsconfig.json',
  },

  ignorePatterns: [
    "node_modules/",
  ],
};
