var request = require('request');
var config = require('./config');

module.exports = {
  call: function(query, callback) {
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
      callback(null, result);
    });
  },
};

