import React from "react";
import { useReducer, useState } from "react";
import "./App.css"
import axios from "axios";

import { factReducer } from "./factReducer";
export const Fact = () => {
    const [state, dispach] = useReducer(factReducer, initialState)
    const handleFatch = () => {
        dispach({ type: "fetch_start" })
        axios.get("http://catfact.ninja/fact")
            .then((res => {
                dispach({
                    type: "fetch_success",
                    data: res.data.fact
                })
                console.log(res)
            })
                .catch((error) => {
                    dispach({ type: "fetch_error" })
                    console.log(error)
                })
            )
    }

    return (
        <div>
            <button onClick={handleFatch}>
                {state.loading ? "is loding ..." : "fetch cat fact"}
                {state.error && <p>Error some thing is wrong</p>}
                <h1>   {state.fact}</h1>
            </button>
        </div>
    )
}

function App() {




    return (
        <div className="App">

        </div>
    );
}
export default App;