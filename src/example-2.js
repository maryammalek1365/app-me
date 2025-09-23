import react from "react";
import {useState} from "react"
import "./App.css"
import axios from "axios";
import { useEffect } from "react";
function App(){
    const [name,setName]=useState("")
    const [predicteResult,setPredicteResult]=useState({})
    const fetchAge =()=>{
        axios.get(`https://api.agify.io/?name=${name}`)
        .then(()=>{
            console.log(res.data)
            setPredicteResult(res.data)
        })
    }
    return (
        <div className="App">
            <input placeholder="ex.sarvin..." 
            onChange={(event)=> setName(event.target.value)}></input>
            <h1> age is: {predicteResult?.age}</h1>
                 <h1> name is: {predicteResult?.name}</h1>
        </div>
    )
}