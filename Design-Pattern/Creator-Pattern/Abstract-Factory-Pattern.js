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

class SUV {
  constructor(wheels, engine, color) {
    this.wheels = wheels;
    this.engine = engine;
    this.color = color;
  }
}

class SuvFactory {
  createCar(type) {
    switch (type) {
      case "hatchBack": {
        return new SUV(4, "v8", "grey");
      }
      case "bigCar": {
        return new SUV(6, "v9", "black");
      }
    }
  }
}

const factory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
  switch (type) {
    case "car": {
      return factory.createCar(model);
    }
    case "suv": {
      return suvFactory.createCar(model);
    }
  }
};
console.log(autoManufacturer("car", "sedan"));
console.log(autoManufacturer("suv", "bigCar"));
