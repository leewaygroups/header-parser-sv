var express = require('express');
var http = require('http');
var appUtil = require('./appUtil.js');

var app = express();

app.get('*', function (req, res) {
  var test = req.ip;
  res.json({
    ip: appUtil.getIP(req),
    language: appUtil.getLanguage(req),
    software: appUtil.getSoftware(req)
  });
});

app.server = http.createServer(app);
app.server.listen((process.env.PORT || 4000), function () {
  console.log('timestamp service listening at port  ' + 4000);
});