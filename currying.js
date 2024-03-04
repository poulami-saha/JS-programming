function f(a) {
  return function (b) {
    return `${a},${b}`;
  };
}

//console.log(f(5)(6));

function sum(val) {
  let acc = val;
  return function (b) {
    return function (c) {
      return val + b + c;
    };
  };
}

console.log(sum(2)(3)(5));

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation == "sum") {
        return a + b;
      } else if (operation == "substract") {
        return a - b;
      } else if (operation == "multiple") {
        return a * b;
      } else if (operation == "divide") {
        return a / b;
      } else {
        return "invalid operation";
      }
    };
  };
}
console.log(evaluate("multiple")(3)(5));

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}
//console.log(add(1)(2)(3)());

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const summation = (a, b, c, d) => a + b + c + d;

const totalSum = curry(summation);

console.log(totalSum(1)(6)(5)(6));
