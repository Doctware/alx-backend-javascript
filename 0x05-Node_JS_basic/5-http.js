const http = require('http');
const fs = require('fs').promises;

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    try {
      const database = process.argv[2];
      if (!database) {
        throw new Error('Database file not provided');
      }

      const data = await fs.readFile(database, 'utf8');
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // Skip header line

      const fields = {};
      students.forEach((student) => {
        const [name, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(name);
      });

      let response = 'This is the list of our students\n';
      response += `Number of students: ${students.length}\n`;
      for (const [field, names] of Object.entries(fields)) {
        response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      res.statusCode = 200;
      res.end(response);
    } catch (error) {
      res.statusCode = 500;
      res.end(`This is the list of our students\n${error.message}`);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

module.exports = app;
