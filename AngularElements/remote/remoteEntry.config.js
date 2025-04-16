// tools/webpack/remote-entry.config.js
const { merge } = require('webpack-merge');

module.exports = (config, context) => {
  return merge(config, {
    output: {
      filename: 'remoteEntry.js'
    }
  });
};