export default function returnHowManyArguments(...Args) {
  let arglength = Args.length;
  if (arglength === undefined) {
    const arglength = 0;
  }
  return arglength
}
