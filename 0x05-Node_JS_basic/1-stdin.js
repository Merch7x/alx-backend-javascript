process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (input) => {
  process.stdout.write(`Your name is: ${input}`);
  console.log('This important software is now closing');
  process.exit();
});

process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
