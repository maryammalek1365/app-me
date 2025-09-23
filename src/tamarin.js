import react from "react";
import {useState} from "react"
import "./App.css"
import axios from "axios";
import { useEffect } from "react";
function App(){
    const [genetateExcuse,setGenerateExcuse]=useState("");
    const fetchExcuse=(excuse)=>{
        axios.get(`https://excuser-three-vercel.app/v1/excuse/${excuse}/`)
        .then((res)=>{
            setGenerateExcuse(res.data[0].excuse)

        })
    }
    return(
        <div className="App">
            <h1>genrate an excuse</h1>
            <button onClick={()=>fetchExcuse("party")}>party</button>
            
            <button onClick={()=>fetchExcuse("family")}>family</button>
        
            <button onClick={()=>fetchExcuse("office")}>office</button>
        </div>
   
    )
}
export default App;