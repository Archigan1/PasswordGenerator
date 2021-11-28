const readline = require("readline");
const cp = require("copy-paste");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rl = readline.createInterface(process.stdin, process.stdout);
rl.question("Length: ", result => {
  let password = "";
  let length = result;
  for (let i = 0; i < length; i++) {
    password += String.fromCharCode(getRandomNumber(33, 126));
  }
  console.log("Password: " + password);
  rl.question("Copy to clipboard (Y/N)? ", result => {
    if (result.toLowerCase().startsWith("y")) {
      cp.copy(password);
      rl.close();
    }
  })
});