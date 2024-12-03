const fs = require('fs');

async function countStudents (path) {
  try {
    const data = await fs.readFileSync(path, 'utf-8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = lines.slice(1).map((line) => line.split(','));

    console.log(`Number of students: ${students.length}`);

    const fields = {};

    students.forEach((student) => {
      const field = student[student.length - 1];
      const firstName = student[0];

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstName);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
