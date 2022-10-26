import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handlePress = (e) => {
    const newState = calculate(this.state, e.target.innerText);
    this.setState(newState);
  }

  render() {
    const { total, next, operation } = this.state;

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
              <td><button type="button" className="non-operators" onClick={this.handlePress}>AC</button></td>
              <td><button type="button" className="non-operators" onClick={this.handlePress}>+/-</button></td>
              <td><button type="button" className="non-operators" onClick={this.handlePress}>%</button></td>
              <td><button type="button" className="operators" onClick={this.handlePress}>÷</button></td>
            </tr>
            <tr>
              <td><button type="button" className="non-operators" onClick={this.handlePress}>7</button></td>
              <td><button type="button" className="non-operators" onClick={this.handlePress}>8</button></td>
              <td><button type="button" className="non-operators" onClick={this.handlePress}>9</button></td>
              <td><button type="button" className="operators" onClick={this.handlePress}>x</button></td>
            </tr>
            <tr>
              <td><button type="button" className="non-operators" onClick={this.handlePress}>4</button></td>
              <td><button type="button" className="non-operators" onClick={this.handlePress}>5</button></td>
              <td><button type="button" className="non-operators" onClick={this.handlePress}>6</button></td>
              <td><button type="button" className="operators" onClick={this.handlePress}>-</button></td>
            </tr>
            <tr>
              <td><button type="button" className="non-operators" onClick={this.handlePress}>1</button></td>
              <td><button type="button" className="non-operators" onClick={this.handlePress}>2</button></td>
              <td><button type="button" className="non-operators" onClick={this.handlePress}>3</button></td>
              <td><button type="button" className="operators" onClick={this.handlePress}>+</button></td>
            </tr>
            <tr>
              <td colSpan="2"><button type="button" className="non-operators" onClick={this.handlePress}>0</button></td>
              <td><button type="button" className="non-operators" onClick={this.handlePress}>.</button></td>
              <td><button type="button" className="operators" onClick={this.handlePress}>=</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
