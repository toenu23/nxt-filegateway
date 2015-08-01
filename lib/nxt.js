var request = require('request');
var Log = require('log');
var log = new Log();

var config = require('./config');

module.exports = {
  call: function(query, callback) {
    log.debug(query);
    request.post(config.nxt.url, { form: query }, function(err, resp, body) {
      if (err) {
        callback(err);
        return;
      }
      if (resp.statusCode !== 200) {
        callback(new Error('Request failed'));
        return;
      }
      try {
        var result = JSON.parse(body);
      }
      catch(e) {
        callback(new Error([e]));
        return;
      }
      log.debug(result);
      callback(null, result);
    });
  },
};

