module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  globals: {
    chrome: "readonly",
    gmail: "readonly",
    trustedTypes: "readonly",
  },
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off",
  },
};
