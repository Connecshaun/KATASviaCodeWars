// Square every digit of an integer and concatenate the resulting values

// 9119

// RESULT 811181

function squareDigits(num) {
  let concat = "";
  //convert to string
  const numString = num.toString();
  //loop through string
  for (const numbers of numString) {
  //square each of the numbers
    const squaredNumber = numbers * numbers;
    //add each squared number to concat
    concat += squaredNumber;
  }
  //convert string to number
  return Number(concat);
}