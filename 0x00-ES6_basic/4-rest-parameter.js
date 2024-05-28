export default function returnHowManyArguments(...Args) {
  const arglength = Args.length;
  if (arglength === undefined) {
    const arglength = 0;
  }
  return arglength;
}
