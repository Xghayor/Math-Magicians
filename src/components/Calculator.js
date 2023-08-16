import React from 'react';
import '../App.css';

const Operators = () => (
  <div className="operators">
    <button type="button">%</button>
    <button type="button">+</button>
    <button type="button">x</button>
    <button type="button">-</button>
    <button type="button">=</button>
  </div>
);

const Calculator = () => (
  <div className="calc-container">
    <input type="number" value="0" required />
    <div className="button-container">
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">+</button>
      <button type="button">0</button>
      <button type="button">.</button>
    </div>
    <Operators />
  </div>
);

export default Calculator;
