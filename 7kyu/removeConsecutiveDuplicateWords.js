// Remove all consecutive duplicate words and just keep their first instance.

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// RESULT "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => {
  const newArray = [];
  const stringArray = s.split(" ");
  
  for (let items of stringArray) {
    newArray.push(items);

    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] === newArray[i + 1]) {
        newArray.pop(newArray[i]);
      }
    }
  }
  return newArray.join(" ");
};
