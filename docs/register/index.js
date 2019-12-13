'use strict';

if (process.env.NODE_ENV === 'production') {
  require('./register.production.min.css');
  module.exports = require('./register.production.min.js');
} else {
  require('./register.development.css');
  module.exports = require('./register.development.js');
}
