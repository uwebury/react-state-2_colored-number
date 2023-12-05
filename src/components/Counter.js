import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleCountPlus() {
    setCount(count + 1);
  }

  function handleCountMinus() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handleCountPlus}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={handleCountMinus}
        >
          -
        </button>
      </div>
    </div>
  );
}
