const sumOfEvenSquares = (numbers) => {
  if (numbers.length === 0) return 0;
  const result = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num * num)
    .reduce((acc, curr) => acc + curr, 0);
  return result;
};

module.exports = sumOfEvenSquares;


console.log(sumOfEvenSquares([1, 2, 3, 4, 5]));
console.log(sumOfEvenSquares([-1,0,1, 2, 3, 4]));
console.log(sumOfEvenSquares([]));
