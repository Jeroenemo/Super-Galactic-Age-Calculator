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
    expect(calculator.mercury(30)).toEqual(125);
  });

  test('should return user age in Venus years', () => {
    expect(calculator.venus(30)).toEqual(48);
  });

  test('should return user age in Mars years', () => {
  expect(calculator.mars(30)).toEqual(15);
  });

  test('should return user age in Jupiter years', () => {
  expect(calculator.jupiter(30)).toEqual(2);
  });

  test('should return years left if planet is earth', () => {
    expect(calculator.yearsLeft("earth")).toEqual(65);
  });

  test('should return years left if planet is mercury', () => {
    expect(calculator.yearsLeft("mercury")).toEqual(270);
  })
});

