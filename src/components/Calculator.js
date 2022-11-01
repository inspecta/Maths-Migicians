import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handlePress = (e) => {
    const number = e.target.innerText;
    setState((state) => calculate(state, number));
  };

  const { total, next, operation } = state;

  return (
    <div className="calc-container">
      <table id="calc" cellSpacing="0">
        <tbody id="calc-body">
          <tr className="result-container">
            <td colSpan="4" className="result">
              <span>{total}</span>
              <span>{operation}</span>
              <span>{next}</span>
            </td>
          </tr>
          <tr>
            <td><button type="button" className="non-operators ac" onClick={handlePress}>AC</button></td>
            <td><button type="button" className="non-operators" onClick={handlePress}>+/-</button></td>
            <td><button type="button" className="non-operators" onClick={handlePress}>%</button></td>
            <td><button type="button" className="operators" onClick={handlePress}>÷</button></td>
          </tr>
          <tr>
            <td><button type="button" className="non-operators" onClick={handlePress}>7</button></td>
            <td><button type="button" className="non-operators" onClick={handlePress}>8</button></td>
            <td><button type="button" className="non-operators" onClick={handlePress}>9</button></td>
            <td><button type="button" className="operators" onClick={handlePress}>x</button></td>
          </tr>
          <tr>
            <td><button type="button" className="non-operators" onClick={handlePress}>4</button></td>
            <td><button type="button" className="non-operators" onClick={handlePress}>5</button></td>
            <td><button type="button" className="non-operators" onClick={handlePress}>6</button></td>
            <td><button type="button" className="operators" onClick={handlePress}>-</button></td>
          </tr>
          <tr>
            <td><button type="button" className="non-operators" onClick={handlePress}>1</button></td>
            <td><button type="button" className="non-operators" onClick={handlePress}>2</button></td>
            <td><button type="button" className="non-operators" onClick={handlePress}>3</button></td>
            <td><button type="button" className="operators" onClick={handlePress}>+</button></td>
          </tr>
          <tr>
            <td colSpan="2"><button type="button" className="non-operators" onClick={handlePress}>0</button></td>
            <td><button type="button" className="non-operators" onClick={handlePress}>.</button></td>
            <td><button type="button" className="operators" onClick={handlePress}>=</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
