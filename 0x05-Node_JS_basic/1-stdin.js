process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (input) => {
  const name = input.trim();
  console.log(`Your name is: ${name}`);
});

process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
