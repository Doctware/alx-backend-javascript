export default function createIteratorObject(report) {
  const allEmployees = [];

  for (const depertmet of Object.values(report.allEmployees)) {
    allEmployees.push(...depertmet);
  }

  return allEmployees;
}
