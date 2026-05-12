console.log('Welcome to Holberton School, what is your name?');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
	const input = chunk.trim();
	console.log('Your name is:', input);
});

process.stdin.on('end', () => {
	console.log('This important software is now closing');
});
