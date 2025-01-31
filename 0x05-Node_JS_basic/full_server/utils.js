import fs from 'fs';

const readDatabase = (dbpath) => new Promise((resolve, reject) => {
  fs.readFile(dbpath, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }

    const students = {};
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const fields = lines.slice(1); // Skip header line

    fields.forEach((line) => {
      const details = line.split(',');
      if (details.length >= 2) {
        const field = details[details.length - 1].trim();
        const firstname = details[0].trim();
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      }
    });

    resolve(students);
  });
});

export default readDatabase;
