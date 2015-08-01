var request = require('request');
var Log = require('log');
var log = new Log();

var config = require('./config');

module.exports = {
  call: function(query, callback) {
    log.debug(query);
    request.post(config.nxt.url, { form: query }, function(err, resp, body) {
      if (err) {
        log.error(err);
        callback(err);
        return;
      }
      if (resp.statusCode !== 200) {
        err = new Error('Request failed');
        log.error(err);
        callback();
        return;
      }
      try {
        var result = JSON.parse(body);
      }
      catch(e) {
        log.error(e);
        callback(new Error([e]));
        return;
      }
      log.debug(result);
      callback(null, result);
    });
  },
};

