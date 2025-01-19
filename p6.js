const numbers = [10, 15, 20, 25, 30, 35, 40];
function sumEvenNumbers(numbers) {
  return numbers.reduce((sum, num) => {
    if (num % 2 == 0) {
      sum += num;
    }
    return sum;
  }, 0);
}

const result = sumEvenNumbers(numbers);
console.log(result);
