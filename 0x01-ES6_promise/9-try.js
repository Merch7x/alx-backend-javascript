export default function guadrail(mathFunction) {
  const queue = [];
  try {
    const res = mathFunction();
    queue.push(res);
    queue.push('Guardrail was processed');
  } catch (error) {
    queue.push(`${error.name}: ${error.message}`);
    queue.push('Guardrail was processed');
    // throw new Error(error);
  }
  return queue;
}
