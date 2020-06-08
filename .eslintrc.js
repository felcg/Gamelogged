module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ["eslint:recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    eqeqeq: "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-console": 0,
    "no-underscore-dangle": ["error", { "allow": ["foo_", "_id", "__v"] }],
    "no-param-reassign": ["error", { "props": false }],
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]}
      ],
    "react/prop-types": "off",
    "no-shadow": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/button-has-type": "off",
    "no-alert": "off",
    "react/require-default-props": "off"
  },
};