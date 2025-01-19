// const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7];

// function getUniqueNumbers(numArray) {
//   return [...new Set(numArray)];
// }

// const uniqueNumbers = getUniqueNumbers(numbers);
// console.log(uniqueNumbers);

const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7];

function getUniqueNumbers(numArray) {
  const uniqueArray = [];
  for (let i = 0; i < numArray.length; i++) {
    if (!uniqueArray.includes(numArray[i])) {
      uniqueArray.push(numArray[i]);
    }
  }
  return uniqueArray;
}

const uniqueNumbers = getUniqueNumbers(numbers);
console.log(uniqueNumbers);
