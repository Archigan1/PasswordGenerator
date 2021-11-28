import { createInterface } from "readline";
import { copy } from "copy-paste";

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rl = createInterface(process.stdin, process.stdout);
rl.question("Length: ", result => {
  let password = "";
  let passwordLength = parseInt(result);
  for (let i = 0; i < passwordLength; i++) {
    password += String.fromCharCode(getRandomNumber(33, 126));
  }
  console.log("Password: " + password);
  rl.question("Copy to clipboard (Y/N)? ", result => {
    if (result.toLowerCase().startsWith("y")) {
      copy(password);
      rl.close();
    }
  })
});