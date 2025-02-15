import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call parent constructor
    this._range = range; // Set specific attribute for EVCar
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
