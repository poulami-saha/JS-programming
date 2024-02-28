//The Prototype pattern allows you to create an object using another object as a blueprint, inheriting its properties and methods.

const Vehicle = {
  wheels: 4,
  color: "red",
};
const Engine = {
  makesNoise: () => console.log("Engine sounds Vroom Vroom"),
};

Object.setPrototypeOf(Vehicle, Engine);

console.log(Object.getPrototypeOf(Vehicle));

console.log(Vehicle)
console.log(Vehicle.makesNoise())

//Common example is Creating Polyfill of Array methods and then adding it in the Array.prototype