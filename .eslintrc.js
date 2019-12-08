module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    rules: {
      'linebreak-style': 'off',
    },
    env: {
      es6: true,
      node: false,
      browser: true,
      jest: true,
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
        },
      },
    },
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  };
  