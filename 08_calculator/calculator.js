const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (nums) {
  let sum = 0;
  nums.forEach(num => sum += num);
  return sum;
};

const multiply = function (nums) {
  let product = 1;
  nums.forEach(num => product *= num);
  return product;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let result = 1;
  while (num > 0) {
    result *= num--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
