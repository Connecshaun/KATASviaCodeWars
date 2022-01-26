// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// [2,4,5,6]

// RESULT [2,4,6]

function getEvenNumbers(numbersArray) {
  const newArray = numbersArray.filter(number => number % 2 === 0);
  return newArray;
}