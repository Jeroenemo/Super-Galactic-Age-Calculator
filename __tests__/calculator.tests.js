import Calculator from './../src/calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator('Jeroen', 30);
  });

  test('should create player object with passed in arguments', () => {
    expect(calculator).toEqual({name: "Jeroen", age: 30})
  })
})

