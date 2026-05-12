const fs = require('fs').promises;

async function countStudents(path) {
	try {
		const data = await fs.readFile(path, 'utf-8');
		const lines = data.split('\n').filter((line) => line.trim() !== '');

		const students = lines.slice(1);
		const fields = {};

		for (const student of students) {
			const [firstname, , , field] = student.split(',');

			if (!fields[field]) {
				fields[field] = [];
			}

			fields[field].push(firstname);
		}

		console.log(`Number of students: ${students.length}`);

		let report = `Number of students: ${students.length}\n`;

		for (const field in fields) {
			if (Object.prototype.hasOwnProperty.call(fields, field)) {
				const msg = `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
				console.log(msg);
				report += `${msg}\n`;
			}
		}

		return report;
	} catch (err) {
		throw new Error('Cannot load the database');
	}
}

module.exports = countStudents;
