var url = require('url);
var Log = require('log');
var log = new Log();

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

appConfig.nxt.url = url.format(appConfig.nxt);

log.debug(appConfig);

module.exports = appConfig;

