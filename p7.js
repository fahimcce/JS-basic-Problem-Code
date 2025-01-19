function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

const year = 2023;
const result = isLeapYear(year);
console.log(`${year} is a leap year: ${result}`);
