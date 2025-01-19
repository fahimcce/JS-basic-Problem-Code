const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7];

function getUniqueNumbers(numArray) {
  return [...new Set(numArray)];
}

const uniqueNumbers = getUniqueNumbers(numbers);
console.log(uniqueNumbers);