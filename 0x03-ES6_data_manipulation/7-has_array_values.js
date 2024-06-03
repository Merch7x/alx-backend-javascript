export default function hasValuesFromArray(myset, myarr) {
  const haselems = myarr.every((elem) => myset.has(elem));
  return haselems;
}
