import operate from './operate';

describe('operate function', () => {
  it('adds two numbers', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });

  it('subtracts two numbers', () => {
    expect(operate('5', '2', '-')).toBe('3');
  });

  it('multiplies two numbers', () => {
    expect(operate('4', '6', 'x')).toBe('24');
  });

  it('divides two numbers', () => {
    expect(operate('10', '2', '÷')).toBe('5');
  });

  it('handles division by zero', () => {
    expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('calculates the modulo of two numbers', () => {
    expect(operate('10', '3', '%')).toBe('1');
  });

  it('handles modulo with divisor zero', () => {
    expect(operate('5', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('throws an error for unknown operation', () => {
    expect(() => operate('5', '2', '^')).toThrow("Unknown operation '^'");
  });
});
