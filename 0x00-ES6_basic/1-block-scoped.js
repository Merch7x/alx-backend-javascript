export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
  let finalTask = task;
  let finalTask2 = task2;

  if (trueOrFalse) {
    finalTask = true;
    finalTask2 = false;
  }

  return [finalTask, finalTask2];
}
