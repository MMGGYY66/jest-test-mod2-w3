import Calculator  from './calculator';

describe('2 + 2', () => {
  const calculator = new Calculator(2, 2);

  it('should return a number for adding', () => {
    expect(typeof calculator.add()).toBe('number');
  });

  it('should return 4', () => {
    expect(calculator.add()).toBe(4);
  });

  it('should be less than 5', () => {
    expect(calculator.add()).toBeLessThan(5);
  });
});

describe('2 * 2', () => {
  const calculator = new Calculator(2, 2);

  it('should return a number for', () => {
    expect(typeof calculator.multiply()).toBe('number');
  });

  it('should return 4', () => {
    expect(calculator.multiply()).toBe(4);
  });

  it('should be less than 5', () => {
    expect(calculator.multiply()).toBeLessThan(5);
  });
});

describe('2 - 2', () => {
  const calculator = new Calculator(2, 2);

  it('should return a number for', () => {
    expect(typeof calculator.substract()).toBe('number');
  });

  it('should return 0', () => {
    expect(calculator.substract()).toBe(0);
  });

  it('should be less than 1', () => {
    expect(calculator.substract()).toBeLessThan(1);
  });
});

describe('2 / 2', () => {
  const calculator = new Calculator(2, 2);

  it('should return a number for', () => {
    expect(typeof calculator.divide()).toBe('number');
  });

  it('should return 1', () => {
    expect(calculator.divide()).toBe(1);
  });

  it('should be less than 2', () => {
    expect(calculator.divide()).toBeLessThan(2);
  });
});