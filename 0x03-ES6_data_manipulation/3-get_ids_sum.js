export default function getStudentIdSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.reduce((total, student) => total + student.id, 0);
}
