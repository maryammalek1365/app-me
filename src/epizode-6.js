import { useState } from "react"
import Text from "./Text"
import react from "react"
function App(){
    const[showText,setShowText]=useState(false)
    return(
        <div className="App">
        <button onClick={()=>setShowText(!showText)}>
        show text</button>
        {showText&&<Text/>}
        </div>
    )
}

export default App