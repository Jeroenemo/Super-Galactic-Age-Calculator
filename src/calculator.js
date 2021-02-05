export default class Calculator {
  constructor(user, age) {
    this.user = user;
    this.age = age;
    this.lifeExpectancy = undefined;
  }
  years(diet, exercise, seatbelt, smoke, drink) {
    let totalYears = 95;
    if (diet === false) {
      totalYears -= 5;
    }
    if (exercise === false) {
      totalYears -= 5;
    }
    if (seatbelt === false) {
      totalYears -= 20;
    }
    if (smoke === true) {
      totalYears -= 10;
    }
    if (drink === true) {
      totalYears -= 10;
    }
    this.lifeExpectancy = totalYears;
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