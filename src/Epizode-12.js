import React from "react";
import { useState } from "react"
import "./App.css"
import { useToggle } from "./useToggle";



function App() {
  const [invisible, toggle] = useToggle()
  const [invisible2, toggle2] = useToggle()
  return (
    <div className="App">

      <button onClick={toggle}>
        {invisible ? "Hide" : "show"}
      </button>
      {invisible && <h1>my hide test</h1>}


      <button onClick={toggle2}>
        {invisible2 ? "Hide" : "show"}
      </button>
      {invisible2 && <h1>my hide test</h1>}
    </div>
  );
}
export default App;