module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["airbnb-base"],
  rules: {
    "import/prefer-default-export": "off",
    quotes: ["error", "double"],
  },
  // rules: {
  //   "no-console": "error",
  //   camelcase: ["error", { properties: "never" }],
  //   semi: ["error", "always"],
  // },
};
