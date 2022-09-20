// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function countWords(str) {
  if (str.length === 0) {
    return {};
  }

  let output = {};
  let strArr = str.split(' ');

  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i];
    if (output[word] === undefined) {
      output[word] = 1;
    } else {
      output[word] += 1;
    }
  }
  return output;
}

let output = countWords('we are a web a developer');
console.log(output);
