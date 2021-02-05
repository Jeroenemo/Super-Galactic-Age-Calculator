export default class Calculator {
  constructor(user, age) {
    this.user = user;
    this.age = age;
    this.lifeSpan = 95;
  }

  lifeExpectancy(diet, exercise, seatbelt, smoke, drink) {
    switch(true) {
    case (diet === 'false'):
      this.lifeSpan -= 5;
    case (exercise === 'false'):
      this.lifeSpan -= 5;
    case (seatbelt === 'false'):
      this.lifeSpan -= 20;
    case (smoke === 'true'):
      this.lifeSpan -= 10;
    case (drink === 'true'):
      this.lifeSpan -= 10;
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
    return Math.floor(number / 11.86);
  }

  yearsLeft(planet) {
    const yearsLeft = this.lifeSpan - this.age;
    
    let years = 0;
    switch(true) {
    case (planet === "earth"):
      years = yearsLeft;
      break;
    case (planet === "mercury"):
      years = this.mercuryYearEquivalent(yearsLeft);
      break;
    case (planet === "venus"):
      years = this.venusYearEquivalent(yearsLeft);
      break;
    case (planet === "mars"):
      years = this.marsYearEquivalent(yearsLeft);
      break;
    case (planet === "jupiter"):
      years = this.jupiterYearEquivalent(yearsLeft);
      break;
    }
    if (yearsLeft >= 0) {
      return (`You have ${years} years to live`);
    } else {
      return (`You have surpassed your life expectancy by ${Math.abs(years)} years`);
    }

  }
}