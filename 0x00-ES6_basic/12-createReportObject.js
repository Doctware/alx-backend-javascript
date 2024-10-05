export default function createaReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepertments: () => { return Object.keys(employeesList).length;},
  };
}
