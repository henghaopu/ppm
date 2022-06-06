module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // reference: https://stackoverflow.com/questions/55807824/describe-is-not-defined-when-installing-jest
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    // reference: https://stackoverflow.com/questions/57962620/how-to-setup-self-closing-when-i-save-code-on-vscode-with-prettier-and-eslint
    'airbnb',
    'airbnb/hooks',
    // after installing eslint-plugin-jest-dom, add the plugin here allows eslint in .test.ts to detect linting error and autofix them
    'plugin:jest-dom/recommended',
    // https://stackoverflow.com/questions/61825296/eslint-plugin-testing-library-is-not-catching-lint-errors
    'plugin:testing-library/react',

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
    'jest-dom',
    // cra has eslint-plugin-testing-library, so we can just enable it
    'testing-library',
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
