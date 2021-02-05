export default class Calculator {
  constructor(user, age) {
    this.user = user;
    this.age = age;
    this.lifeExpectancy = undefined;
  }
  mercury() {
    return Math.floor(this.age * 0.24);
  }
  venus() {
    return Math.floor(this.age * 0.62);
  }
  mars() {
    return Math.floor(this.age * 1.88);
  }
  jupiter() {
    return Math.floor(this.age * 11.86)
  }
}