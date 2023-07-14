import React, { useState } from "react";

function useIncrement(addAmount) {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + addAmount);
  }

  return [count, increase];
}

function Counter1() {
  const [count, increase] = useIncrement(1);

  return (
    <div>
      <h2>Counter 1</h2>
      <p>Count: {count}</p>
      <button onClick={increase}>Add 1</button>
    </div>
  );
}

function Counter2() {
  const [count, increase] = useIncrement(2);

  return (
    <div>
      <h2>Counter 2</h2>
      <p>Count: {count}</p>
      <button onClick={increase}>Add 2</button>
    </div>
  );
}

function Bai3() {
  return (
    <div>
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default Bai3;
