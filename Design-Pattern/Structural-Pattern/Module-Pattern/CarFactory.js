import Car from "./Car.js";

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

console.log(new CarFactory().createCar("sedan"));   
