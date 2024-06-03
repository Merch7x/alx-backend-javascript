export default function getStudentsByLocation(myarr, city) {
  const newarr = myarr.filter((student) => student.location === city);
  return newarr;
}
