function square(num) {
  return num * num;
}

function double(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}

function compose(num) {
  const squared = square(num);
  const doubled = double(squared);
  return addFive(doubled);
}

const result = compose(3);
console.log(result);
