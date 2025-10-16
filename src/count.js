import React from "react";
import { useCount } from "./useCount";
import "./App.css"



function App() {
  const { count, increase, decrease, reSet } = useCount();



  return (
    <div className="App">
      {count}
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reSet}>reSet</button>
    </div>
  );
}
export default App;