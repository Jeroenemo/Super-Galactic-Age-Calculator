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

  mercuryYearEquivalent(number) {
    return Math.floor(number / 0.24);
  }

  venusYearEquivalent(number) {
    return Math.floor(number / 0.62);
  }

  marsYearEquivalent(number) {
    return Math.floor(number / 1.88);
  }

  jupiterYearEquivalent(number) {
    return Math.floor(number / 11.86)
  }

  yearsLeft(planet) {
    const yearsLeft = this.lifeExpectancy - this.age;
    switch(true) {
      case (planet === "mercury"):
        return this.mercuryYearEquivalent(yearsLeft);
        
      case (planet === "venus"):
        return this.venusYearEquivalent(yearsLeft);
        
      case (planet === "mars"):
        return this.marsYearEquivalent(yearsLeft);
        
      case (planet === "jupiter"):
        return this.jupiterYearEquivalent(yearsLeft);
        
    }
    return yearsLeft;
  }
}