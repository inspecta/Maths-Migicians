import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-container">
        <table id="calc" cellSpacing="0">
          <tbody id="calc-body">
            <tr className="result-container">
              <td colSpan="4">
                <input type="text" className="result" placeholder="0" />
                {' '}

              </td>
            </tr>
            <tr>
              <td><button type="button" className="non-operators">AC</button></td>
              <td><button type="button" className="non-operators">+/-</button></td>
              <td><button type="button" className="non-operators">%</button></td>
              <td><button type="button" className="operators">÷</button></td>
            </tr>
            <tr>
              <td><button type="button" className="non-operators">7</button></td>
              <td><button type="button" className="non-operators">8</button></td>
              <td><button type="button" className="non-operators">9</button></td>
              <td><button type="button" className="operators">x</button></td>
            </tr>
            <tr>
              <td><button type="button" className="non-operators">4</button></td>
              <td><button type="button" className="non-operators">5</button></td>
              <td><button type="button" className="non-operators">6</button></td>
              <td><button type="button" className="operators">-</button></td>
            </tr>
            <tr>
              <td><button type="button" className="non-operators">1</button></td>
              <td><button type="button" className="non-operators">2</button></td>
              <td><button type="button" className="non-operators">3</button></td>
              <td><button type="button" className="operators">+</button></td>
            </tr>
            <tr>
              <td colSpan="2"><button type="button" className="non-operators">0</button></td>
              <td><button type="button" className="non-operators">.</button></td>
              <td><button type="button" className="operators">=</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
