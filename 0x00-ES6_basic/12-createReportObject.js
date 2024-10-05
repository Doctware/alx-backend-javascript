export default function createaReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepertments: () => Object.keys(employeesList).length,
  };
}
