var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
app.use(bodyParser.json());
var port = process.env.PORT || 4000;
// viewed at http://localhost:4000
app.use('/',express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.listen(port);
