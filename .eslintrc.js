module.exports = {
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  env: {
    jasmine: true,
    node: true,
    browser: true
  },
  globals: {
    cy: true,
    Cypress: true
  }
};
