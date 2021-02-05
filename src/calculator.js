export default class Calculator {
  constructor(user, age) {
    this.user = user;
    this.age = age;
  }
  mercury() {
    return Math.floor(this.age * 0.24);
  }
}