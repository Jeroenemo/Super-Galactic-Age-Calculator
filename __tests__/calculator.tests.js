import Calculator from './../src/calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator('Jeroen', 30);
  });

  test('should create player object with passed in arguments', () => {
    expect(calculator).toEqual({user: "Jeroen", age: 30, lifeExpectancy: 95});
  });

  test('should calculate life expectancy depending on user input', () => {
    calculator.years(false, false, false, false, false);
    expect(calculator.lifeExpectancy).toEqual(45);
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
    expect(calculator.yearsLeft("earth")).toEqual(65);
  });

  test('should return years left if planet is mercury', () => {
    expect(calculator.yearsLeft("mercury")).toEqual(270);
  });

  test('should return years left if planet is venus', () => {
    expect(calculator.yearsLeft("venus")).toEqual(104);
  });

  test('should return years left if planet is mars', () => {
    expect(calculator.yearsLeft("mars")).toEqual(34);
  });
  test('should return years left if planet is jupiter', () => {
    expect(calculator.yearsLeft("jupiter")).toEqual(5);
  });
});

