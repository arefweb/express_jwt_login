module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@shopify/node",
    "prettier",
  ],
  env: {
    node: true,
    browser: false,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "es6",
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    quotes: [1, "double"],
    "prettier/prettier": "warn",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
};
