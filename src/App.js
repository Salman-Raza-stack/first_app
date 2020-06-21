import React from "react";
import "./App.css";
import Parent from "./Parent";
import CounterContext from "./CounterContext";

function App() {
  return (
    <CounterContext.Provider value={25}>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
