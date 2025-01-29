const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;

const countStudents = (databasePath) => new Promise((resolve, reject) => {
  fs.readFile(databasePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length === 0) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const students = {};
    const fields = lines.slice(1);
    fields.forEach((line) => {
      const details = line.split(',');
      if (details.length >= 2) {
        const field = details[details.length - 1].trim();
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(details[0].trim());
      }
    });
    let response = `Number of students: ${fields.length}\n`;
    for (const [field, names] of Object.entries(students)) {
      response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }
    resolve(response.trim());
  });
});

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  countStudents(databasePath)
    .then((data) => {
      res.setHeader('Content-Type', 'text/plain');
      res.send(`This is the list of our students\n${data}`);
    })
    .catch(() => {
      res.setHeader('Content-Type', 'text/plain');
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
