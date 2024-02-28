class Car {
  constructor(wheels, engine, color) {
    this.wheels = wheels;
    this.engine = engine;
    this.color = color;
  }
}

class SUV extends Car {
  constructor(wheels, engine, color) {
    super(wheels, engine, color);
    this.carrier = true;
  }
}

console.log(new SUV(4, "V9", "gray"));
