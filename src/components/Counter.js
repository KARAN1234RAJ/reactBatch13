import { useState } from "react";

function Counter() {
  // const count = 10;
  let [count, setCount] = useState(0);
  let [name, setName] = useState("Karan");
  const handleIncrement = () => {
    console.log("increment called");
    setCount(count + 1);
  };
  const handleDecrement = () => {
    console.log("Decrement called");
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter;
