import readline from 'readline';

export function askQuestion(query) {
  const rl = readline.createInterface({
    input: process?.stdin,
    output: process?.stdout,
    prompt: 'CLI',
  });

  return new Promise(function (resolve, reject) {
    return rl.question(query, answer => {
      rl.close();
      resolve(answer.trim());
    });
  });
}
