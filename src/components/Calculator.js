/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      error: null,
    };
  }

  render() {
    const click = (e) => {
      const result = calculate(this.state, e.target.value);
      this.setState(result);
    };
    const {
      total, next, operation, error,
    } = this.state;
    return (
      <div className="calculator-container">
        <div className="result">
          {total}
          {operation}
          {next}
          {error}
        </div>
        <div className="line">
          <button type="button" className="key" value="AC" onClick={click}>AC</button>
          <button type="button" className="key" value="+/-" onClick={click}>+/-</button>
          <button type="button" className="key" value="%" onClick={click}>%</button>
          <button type="button" className="key color" value="÷" onClick={click}>÷</button>
        </div>
        <div className="line">
          <button type="button" className="key" value="7" onClick={click}>7</button>
          <button type="button" className="key" value="8" onClick={click}>8</button>
          <button type="button" className="key" value="9" onClick={click}>9</button>
          <button type="button" className="key color" value="x" onClick={click}>x</button>
        </div>
        <div className="line">
          <button type="button" className="key" value="4" onClick={click}>4</button>
          <button type="button" className="key" value="5" onClick={click}>5</button>
          <button type="button" className="key" value="6" onClick={click}>6</button>
          <button type="button" className="key color" value="-" onClick={click}>-</button>
        </div>
        <div className="line">
          <button type="button" className="key" value="1" onClick={click}>1</button>
          <button type="button" className="key" value="2" onClick={click}>2</button>
          <button type="button" className="key" value="3" onClick={click}>3</button>
          <button type="button" className="key color" value="+" onClick={click}>+</button>
        </div>
        <div className="line">
          <button type="button" className="key-exception" value="0" onClick={click}>0</button>
          <button type="button" className="key" value="." onClick={click}>.</button>
          <button type="button" className="key color" value="=" onClick={click}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
