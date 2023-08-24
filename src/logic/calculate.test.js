import calculate from './calculate'; // Update the import path accordingly

describe('calculate function', () => {
  it('should handle AC button correctly', () => {
    const initialState = {
      total: 10,
      next: '5',
      operation: '+',
    };
    const result = calculate(initialState, 'AC');
    expect(result).toEqual({
      total: 0,
      next: null,
      operation: null,
    });
  });

  it('should handle addition correctly', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = calculate(initialState, '=');
    expect(result).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });

  it('should handle subraction correctly', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: '-',
    };
    const result = calculate(initialState, '=');
    expect(result).toEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });


  it('should handle multiplication correctly', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: 'x',
    };
    const result = calculate(initialState, '=');
    expect(result).toEqual({
      total: '50',
      next: null,
      operation: null,
    });
  });

  it('should handle division correctly', () => {
    const initialState = {
      total: '2',
      next: '2',
      operation: '÷',
    };
    const result = calculate(initialState, '=');
    expect(result).toEqual({
      total: '1',
      next: null,
      operation: null,
    });
  });
});







//   it('should handle division correctly', () => {
    
//   });

 
