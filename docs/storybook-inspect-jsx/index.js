'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./storybook-inspect-jsx.production.min.js');
} else {
  module.exports = require('./storybook-inspect-jsx.development.js');
}
