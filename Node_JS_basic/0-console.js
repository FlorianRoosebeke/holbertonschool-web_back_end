export default function displayMessage() {

	const args = process.argv.slice(2);
	console.log('Arguments:', args);
	args.forEach((arg, index) => {
		console.log(`${index + 1}: ${arg}`);
	});
}