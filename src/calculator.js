export default class Calculator {
  constructor(user, age) {
    this.user = user;
    this.age = age;
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
  
}