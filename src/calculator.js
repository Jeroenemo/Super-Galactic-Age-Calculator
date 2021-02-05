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
  venus(number) {
    return Math.floor(number / 0.62);
  }
  mars(number) {
    return Math.floor(number / 1.88);
  }
  jupiter(number) {
    return Math.floor(number / 11.86)
  }
  yearsLeft(planet) {
    const yearsLeft = this.lifeExpectancy - this.age;
    switch(true) {
      case (planet === "mercury"):
        return this.mercury(yearsLeft);
        break;
      case (planet === "venus"):
        return this.venus(yearsLeft);
        break;
      case (planet === "mars"):
        return this.mars(yearsLeft);
        break;
    }
    return yearsLeft;
  }
}