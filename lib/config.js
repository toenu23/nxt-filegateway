var appConfig = require('../config.json');

var defaultConfig = {
  port: 2332,
  nxt: {
    protocol: 'http',
    host: '127.0.0.1',
    port: 7876,
  },
};

for (var k in defaultConfig) {
  if (!appConfig[k]) {
    appConfig[k] = defaultConfig[k];
  }
}

module.exports = appConfig;

