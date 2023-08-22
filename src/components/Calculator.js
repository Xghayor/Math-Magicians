import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import calculate from '../logic/calculate';

const Operators = ({ onClick }) => (
  <div className="operators">
    <button type="button" onClick={() => onClick('%')} value="%">%</button>
    <button type="button" onClick={() => onClick('+')} value="+">+</button>
    <button type="button" onClick={() => onClick('x')} value="x">x</button>
    <button type="button" onClick={() => onClick('-')} value="-">-</button>
    <button type="button" onClick={() => onClick('=')} value="=">=</button>
  </div>
);

Operators.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Calculator = () => {
  const [calculatorState, setCalculatorState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const updatedState = calculate(calculatorState, buttonName);
    setCalculatorState(updatedState);
  };
  return (

    <div className="calc-container">
      <input
        type="number"
        value={calculatorState.next !== null ? calculatorState.next : calculatorState.total}
        onChange={(e) => {
          const newValue = e.target.value;
          const updatedState = {
            ...calculatorState,
            next: newValue !== '' ? parseFloat(newValue) : null,
          };
          setCalculatorState(updatedState);
        }}
      />

      <div className="button-container">
        <button type="button" onClick={() => handleClick('AC')}>AC</button>
        <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
        <button type="button" onClick={() => handleClick('7')}>7</button>
        <button type="button" onClick={() => handleClick('8')}>8</button>
        <button type="button" onClick={() => handleClick('9')}>9</button>
        <button type="button" onClick={() => handleClick('4')}>4</button>
        <button type="button" onClick={() => handleClick('5')}>5</button>
        <button type="button" onClick={() => handleClick('6')}>6</button>
        <button type="button" onClick={() => handleClick('1')}>1</button>
        <button type="button" onClick={() => handleClick('2')}>2</button>
        <button type="button" onClick={() => handleClick('3')}>3</button>
        <button type="button" onClick={() => handleClick('+')}>+</button>
        <button type="button" onClick={() => handleClick('0')}>0</button>
        <button type="button" onClick={() => handleClick('.')}>.</button>
      </div>
      <Operators onClick={(buttonName) => handleClick(buttonName)} />
    </div>
  );
};

export default Calculator;
