/* eslint-disable import/no-extraneous-dependencies */
/**
 * ReX React Components Starter kit
 * Project entry points for webpack (automated version)
 */

const entry = {
  'MyComponent/MyComponent': './src/MyComponent/MyComponent.jsx',
  'register/register': './src/register/register.jsx',
  'storybook-inspect-jsx/storybook-inspect-jsx':
    './src/storybook-inspect-jsx/index.jsx',
};

const npmFiles = {
  index: 'storybook-inspect-jsx',
  components: ['register', 'storybook-inspect-jsx', 'MyComponent'],
};

module.exports = {
  entry,
  npmFiles,
};
