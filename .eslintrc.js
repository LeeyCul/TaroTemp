module.exports = {
  extends: ['taro/react', require.resolve('@hxgy/lancet-lint/dist/eslint')],
  rules: {
    'react/jsx-key': 2,
    'object-curly-spacing': [2, 'always'],
    'react/jsx-curly-spacing': [2, 'always'],
  },
};
