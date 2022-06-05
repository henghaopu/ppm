module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    // reference: https://stackoverflow.com/questions/57962620/how-to-setup-self-closing-when-i-save-code-on-vscode-with-prettier-and-eslint
    'airbnb',
    'airbnb/hooks',
    // reference: https://blog.devgenius.io/eslint-prettier-typescript-and-react-in-2022-e5021ebca2b1
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    // cra has eslint-plugin-jest-dom and eslint-plugin-testing-library, so we can just enable them
    'jest-dom',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['tx', 'tsx', '.js'] },
    ],
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
      },
    ],
    // reference: https://typescript-eslint.io/rules/no-unused-vars/
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  // https://github.com/import-js/eslint-plugin-import/issues/1615
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
    },
  },
}
