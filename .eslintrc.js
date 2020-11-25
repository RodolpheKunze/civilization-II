module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-expressions': 'off',
    'react/prop-types': 'off',
    'import/no-duplicates': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/camelcase': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'jsx-a11y/anchor-is-valid': 0,
    'no-console': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],
    '@typescript-eslint/no-empty-function': 0,
    'react/no-array-index-key': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
