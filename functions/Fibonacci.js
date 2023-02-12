const bigInt = require("big-integer");

const calculateFibonacci = (n) => {
  let a = bigInt("0"),
    b = bigInt("1"),
    temp;
  for (let i = 0; i < n; i++) {
    temp = a;
    a = b;
    b = temp.add(b);
  }
  return a.toString();
};

export default calculateFibonacci;
