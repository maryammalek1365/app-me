import react from "react";
import {useState} from "react"
import "./App.css"
import axios from "axios";
import { useEffect } from "react";
function App(){
     const [fact, setFact] = useState("");
      useEffect(()=>{
        fetchFact()
      } , []);
      const  fetchFact=()=>{
    axios.get ("https://catfact.ninja/fact").then((res)=>{
   
        console.log(res.data)
         setFact( res.data.fact); // ذخیره در state
    })
}
return (
    <div className="App">
        <button onClick={fetchFact}>fetch data</button>
 <p>{fact}</p>
    </div> 
)
}
export default App
