export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result); // Push the result into the queue
  } catch (error) {
    queue.push(error.toString()); // Convert the error to a string and push it into the queue
  }
  queue.push('Guardrail was processed');

  return queue;
}
