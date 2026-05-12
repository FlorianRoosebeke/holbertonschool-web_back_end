const expres; s = require('express');
const app = require('.app');
const app = express();

app.getConnections('/', (req, res) => {
	res.send('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
