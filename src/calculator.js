export default class Calculator {
  constructor(user, age) {
    this.user = user;
    this.age = age;
    this.lifeExpectancy = 95;
  }
  years(diet, exercise, seatbelt, smoke, drink) {
    switch(true) {
      case (diet === false):
        this.lifeExpectancy -= 5;
      case (exercise === false):
        this.lifeExpectancy -= 5;
      case (seatbelt === false):
        this.lifeExpectancy -= 20;
      case (smoke === true):
        this.lifeExpectancy -= 10;
      case (drink === true):
        this.lifeExpectancy -= 10;
    }
  }
  mercury(number) {
    return Math.floor(number / 0.24);
  }
  venus() {
    return Math.floor(this.age / 0.62);
  }
  mars() {
    return Math.floor(this.age / 1.88);
  }
  jupiter() {
    return Math.floor(this.age / 11.86)
  }
  // yearsLeft(planet) {
  //   switch(true) {
  //     case (planet === "earth"):
  //       return this.lifeExpectancy.mercury();
  //       break;
  //   }
  // }
}