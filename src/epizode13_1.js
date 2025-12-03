import React from "react";
import { Form } from "./Form";
import { formReducer } from "./formReducer";
import { useReducer, useState } from "react";
import "./App.css"
import axios from "axios";
import { ACTION_TYPE } from "./factAction"
import { factReducer, initialState } from "./factReducer";
export const Fact = () => {
  const [state, dispatch] = useReducer(factReducer, initialState)
  const handleFetch = () => {
    dispatch({ type: ACTION_TYPE.fetch_start })
    axios.get("fact/")
      .then((res => {
        dispatch({
          type: ACTION_TYPE.fetch_success,
          data: res.data.fact
        })
        console.log(res)
      }))
      .catch((error) => {
        dispatch({ type: ACTION_TYPE.fetch_error })
        console.log(error)
      })

  }

  return (
    <div>
      <button onClick={handleFetch}>
        {state.loading ? "is loding ..." : "fetch cat fact"}     </button>
      {state.error && <p>Error some thing is wrong</p>}
      <h1>   {state.fact}</h1>

    </div>
  )
}

function App() {




  return (
    <div className="App">
      <Fact />
    </div>
  );
}
export default App;