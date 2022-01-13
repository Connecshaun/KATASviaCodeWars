// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// [3, 4, 4, 3, 6, 3]

// RESULT [4, 6, 3]

function solve(arr) {
  let newArray = [];
  //reverse loop to start from the end
  while (arr.length > 0) {
    //pop() to capture last element
    const removeLastRepeated = arr.pop();
    if (!newArray.includes(removeLastRepeated)) {
      newArray.push(removeLastRepeated);
    }
  }
  return newArray.reverse();
}


