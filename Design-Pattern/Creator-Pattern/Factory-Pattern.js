//The Factory method pattern provides an interface for creating objects that can be modified
//after creation.
//The cool thing about this is that the logic for creating our objects is centralized
//in a single place, simplifying and better organizing our code.

class Vehicle {
  constructor(wheels, color) {
    this.wheels = wheels;
    this.color = color;
  }
}

class VehicleFactory {
  createVehicle(type) {
    switch (type) {
      case "car": {
        return new Vehicle(4, "grey");
      }
      case "truck": {
        return new Vehicle(12, "black");
      }
    }
  }
}

const factory = new CarFactory();
console.log(factory.createVehicle("car"));
console.log(factory.createVehicle("truck"));
