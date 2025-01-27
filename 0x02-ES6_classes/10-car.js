export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Clone method to create a new instance of the current class
  cloneCar() {
    // Create a new instance using the class constructor
    const newCar = new this.constructor(this._brand, this._motor, this._color);
    return newCar;
  }
}
