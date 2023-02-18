import React from "react";
import css from "./Counter.module.scss";

export function Counter() {
  const [counter, setCounter] = React.useState<number>(0);
  function increaseCounter() {
    setCounter((prev) => ++prev);
  }
  return (
    <div className={css.red}>
      <h1 className={css.red}>{counter}</h1>
      <button onClick={() => increaseCounter()}>+1</button>
    </div>
  );
}
