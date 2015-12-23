'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (request, response) {
    response.send('Hello');
});

app.post('/', function (request, response) {
    response.send(request.body);
});

app.listen(3000);

console.log('Open: http://127.0.0.1:3000');
