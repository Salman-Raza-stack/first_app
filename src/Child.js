import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Child = () => {
  let counterValue = useContext(CounterContext);
  console.log(counterValue);
  return (
    <div>
      <h1>This is First child</h1>
      <h3>Counter Value is : {counterValue[0]}</h3>
      <button
        onClick={() => {
          counterValue[1](++counterValue[0]);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          counterValue[1](--counterValue[0]);
        }}
      >
        Decrement
      </button>
    </div>
  );
};
export default Child;
