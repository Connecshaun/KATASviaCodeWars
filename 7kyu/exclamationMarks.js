// Move all exclamation marks to the end of the sentence.

// remove("Hi! Hi! Hi!")

// RESULT "Hi Hi Hi!!!"

function remove(s) {
  let newString = "";
  let endOfString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "!") {
      newString += s[i];
    } else {
      endOfString += s[i];
    }
  }
  return newString.concat(endOfString);
}