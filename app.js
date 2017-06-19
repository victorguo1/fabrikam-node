
var express = require('express'),
  config = require('./config/config');

var app = express();

module.exports = require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Express Fabrikam server listening on port ' + config.port);
});

