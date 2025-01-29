const http = require('http');
const fs = require('fs');

const countStudents = (database) => new Promise((resolve, reject) => {
  fs.readFile(database, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1).map((line) => line.split(','));
      const fields = {};

      students.forEach((student) => {
        const field = student[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      });

      let result = `Number of students: ${students.length}\n`;
      for (const [field, names] of Object.entries(fields)) {
        result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      resolve(result.trim());
    }
  });
});

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    const database = process.argv[2];
    if (!database) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('This is the list of our students\nCannot load the database');
      return;
    }

    countStudents(database)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

module.exports = app;
