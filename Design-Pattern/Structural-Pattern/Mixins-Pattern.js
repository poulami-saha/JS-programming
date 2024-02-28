//If we had a class or a factory function, the object we instantiate will always have 
//all the properties and methods declared in that class/factory. 
//But using the builder pattern, we can create an object and apply to it only the "steps" 
//we need, which is a more flexible approach.

class Car {
  constructor(wheels, engine, color) {
    this.wheels = wheels;
    this.engine = engine;
    this.color = color;
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case "sedan": {
        return new Car(4, "v8", "grey");
      }
      case "limousine": {
        return new Car(6, "v9", "black");
      }
    }
  }
}

const factory = new CarFactory();

let carMixin = {
  makesNoise() {
    console.log("The engine says vroom vroom");
  },
};



Object.assign(Car.prototype, carMixin);
const car = new CarFactory().createCar("sedan");
console.log(car.makesNoise());

//This pattern resembles the Builder Pattern to some extent in the Creator Section