function getListStudents() {
  const studentList = [];

  const ourObj = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  ourObj.forEach((obj) => {
    studentList.push(obj);
  });

  return studentList;
}

export default getListStudents;
