import React, { useState } from "react";

const Bai2 = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(0);

  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

  const handleAdd = () => {
    const sum = parseInt(number1) + parseInt(number2);
    setResult(sum);
  };

  const handleSubtract = () => {
    const difference = parseInt(number1) - parseInt(number2);
    setResult(difference);
  };

  const handleMultiply = () => {
    const product = parseInt(number1) * parseInt(number2);
    setResult(product);
  };

  const handleDivide = () => {
    const quotient = parseInt(number1) / parseInt(number2);
    setResult(quotient);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input type="number" value={number1} onChange={handleNumber1Change} />
      <input type="number" value={number2} onChange={handleNumber2Change} />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleMultiply}>x</button>
      <button onClick={handleDivide}>/</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default Bai2;
