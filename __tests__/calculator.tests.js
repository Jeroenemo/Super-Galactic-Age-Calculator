import Calculator from './../src/calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator('Jeroen', 30);
  });

  test('should create player object with passed in arguments', () => {
    expect(calculator).toEqual({user: "Jeroen", age: 30, lifeSpan: 95});
  });

  test('should calculate life expectancy depending on user input', () => {
    calculator.lifeExpectancy('true', 'false', 'false', 'false', 'false');
    expect(calculator.lifeSpan).toEqual(70);
  });
  test('should calculate life expectancy depending on user input', () => {
    calculator.lifeExpectancy('false', 'true', 'false', 'false', 'false');
    expect(calculator.lifeSpan).toEqual(70);
  });
  test('should calculate life expectancy depending on user input', () => {
    calculator.lifeExpectancy('false', 'false', 'true', 'false', 'false');
    expect(calculator.lifeSpan).toEqual(85);
  });
  test('should calculate life expectancy depending on user input', () => {
    calculator.lifeExpectancy('false', 'false', 'false', 'true', 'false');
    expect(calculator.lifeSpan).toEqual(55);
  });
  test('should calculate life expectancy if drink = true', () => {
    calculator.lifeExpectancy('false', 'false', 'false', 'false', 'true');
    expect(calculator.lifeSpan).toEqual(55);
  });
  test('should return user age in Mercury years', () => {
    expect(calculator.mercuryYearEquivalent(30)).toEqual(125);
  });

  test('should return user age in Venus years', () => {
    expect(calculator.venusYearEquivalent(30)).toEqual(48);
  });

  test('should return user age in Mars years', () => {
  expect(calculator.marsYearEquivalent(30)).toEqual(15);
  });

  test('should return user age in Jupiter years', () => {
  expect(calculator.jupiterYearEquivalent(30)).toEqual(2);
  });

  test('should return years left if planet is earth', () => {
    expect(calculator.yearsLeft("earth")).toEqual("You have 65 years to live");
  });

  test('should return years left if planet is mercury', () => {
    expect(calculator.yearsLeft("mercury")).toEqual("You have 270 years to live");
  });

  test('should return years left if planet is venus', () => {
    expect(calculator.yearsLeft("venus")).toEqual("You have 104 years to live");
  });

  test('should return years left if planet is mars', () => {
    expect(calculator.yearsLeft("mars")).toEqual("You have 34 years to live");
  });

  test('should return years left if planet is jupiter', () => {
    expect(calculator.yearsLeft("jupiter")).toEqual("You have 5 years to live");
  });

  test('should return years lived past life expectancy', () => {
    const calculator = new Calculator("Jeroen", 100);
    expect(calculator.yearsLeft("earth")).toEqual("You have surpassed your life expectancy by 5 years");
  })
});

