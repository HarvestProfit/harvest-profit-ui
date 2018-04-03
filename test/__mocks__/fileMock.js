// This file contains some ecletic jest fixes
const path = require('path');

/* eslint-disable */
module.exports = {
  process(src, filename, config, options) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
/* eslint-enable */
