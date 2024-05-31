export default function createEmployeesObject(departmentName, employees) {
  const arr = Array.from(employees);
  return {
    [departmentName]: arr,
  };
}
