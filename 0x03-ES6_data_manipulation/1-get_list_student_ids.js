export default function getListStudentIds(myarr) {
  if (Array.isArray(myarr) === true) {
    const newarr = myarr.map((student) => student.id);

    return newarr;
  }
  return [];
}
