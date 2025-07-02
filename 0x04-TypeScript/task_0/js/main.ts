interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Olayode",
  lastName: "Alani",
  age: 29,
  location: "Lagos, Nigeria"
}

const student2: Student = {
  firstName: "Adeyemi",
  lastName: "Yusuf",
  age: 29,
  location: "Saoudi Arabia, Mecca"
}

const studentList: Student[] = [student1, student2]

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row)
})

table.appendChild(tbody);
document.body.appendChild(table);
