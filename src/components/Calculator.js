function Calculator() {
  return (
    <div className="calculator-container">
      <input className="calc-input" type="text" placeholder="0" />
      <div className="line">
        <button type="button" className="key">AC</button>
        <button type="button" className="key">+/-</button>
        <button type="button" className="key">%</button>
        <button type="button" className="key color">÷</button>
      </div>
      <div className="line">
        <button type="button" className="key">7</button>
        <button type="button" className="key">8</button>
        <button type="button" className="key">9</button>
        <button type="button" className="key color">x</button>
      </div>
      <div className="line">
        <button type="button" className="key">4</button>
        <button type="button" className="key">5/-</button>
        <button type="button" className="key">6</button>
        <button type="button" className="key color">-</button>
      </div>
      <div className="line">
        <button type="button" className="key">1</button>
        <button type="button" className="key">2</button>
        <button type="button" className="key">3</button>
        <button type="button" className="key color">+</button>
      </div>
      <div className="line">
        <button type="button" className="key-exception">0</button>
        <button type="button" className="key">.</button>
        <button type="button" className="key color">=</button>
      </div>
    </div>
  );
}

export default Calculator;
