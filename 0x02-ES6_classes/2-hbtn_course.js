export default class ALXCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of string');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter for attr name
  get name() {
    return this._name;
  }

  // setter for attr name
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = newName;
  }

  // geter for attr length
  get length() {
    return this._lenght;
  }

  // setter for attr legth
  set length(newLength) {
    if (typeof newLength !== 'string') {
      throw new TypeError('Length must be a number');
    }
    this._legth = newLength;
  }

  // getter for attr students
  get students() {
    return this._students;
  }

  // setter for attr student
  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
