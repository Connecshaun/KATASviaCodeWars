// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// remove("Hi! !Hi! Hi!")

// RESULT "!Hi!"

function remove (string) {
  let arr = string.split(" ");
  let newArr = []
  
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    
    //too loop through individual characters of words
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "!") {
        counter ++;
      }
    }
    if (counter !== 1) {
      newArr.push(arr[i])
    }
  }
  return newArr.join(" ");
}


//OPTION 2

function remove (s) {
  return s.split(' ').
  filter(i => i.split('!').length != 2).join(' ');
}
  
