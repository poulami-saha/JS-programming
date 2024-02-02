const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const sum1 = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum1);
