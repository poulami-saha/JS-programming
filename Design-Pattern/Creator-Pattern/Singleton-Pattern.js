//Singleton is a design pattern that ensures that a class has only one immutable instance.

//Said simply, the singleton pattern consists of an object that can't be copied or modified.

//It's often useful when we want to have some immutable single point of truth for our application.

//Implementation can be done in 2 ways:

let instance = null;
class Vehicle {
  constructor(wheels, color) {
    if (!instance) {
      this.wheels = wheels;
      this.color = color;
      instance = this;
    }
    return instance;
  }
}

console.log(new Vehicle(4, "red"));
console.log(new Vehicle(6, "yellow"));

class Vehicles {
  constructor(wheels, color) {
    this.wheels = wheels;
    this.color = color;
  }
}
const car = new Vehicles(4, "red");

Object.freeze(car);

car.wheels = 6;

console.log(car);//Will throw error since wheel is not a non-editable field
