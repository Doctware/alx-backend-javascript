import readDatabase from '../utils';

class StudentsController {
  static getAllStudents (request, response) {
    const filePath = process.argv[2];
    readDatabase(filePath)
      .then((students) => {
        let responseText = 'This is the list of our students\n';
        const sortedFields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        sortedFields.forEach((field) => {
          responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        });
        response.status(200).send(responseText.trim());
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor (req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    const filePath = process.argv[2];
    readDatabase(filePath)
      .then((students) => {
        if (!students[major]) {
          return res.status(200).send('List:');
        }
        res.status(200).send(`List: ${students[major].join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
