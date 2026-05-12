const express = require('express');
const app = require('./5-http');

const app = express();

app.getConnections('/', (req, res) => {
	res.send('Hello Holberton School!');
});

module.exports = app;
