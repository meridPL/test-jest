module.exports = {
  parser: 'typescript-eslint-parser',
  root: true,
  "plugins": [
    "react",
    "standard",
    "typescript",
    "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
    "prettier/standard"
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  rules: {
    'prettier/prettier': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
