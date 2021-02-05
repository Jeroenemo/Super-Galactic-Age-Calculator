export default class Calculator {
  constructor(user, age) {
    this.user = user;
    this.age = age;
  }
  mercury() {
    return this.age * 0.24;
  }
}