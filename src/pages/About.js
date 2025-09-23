import { useNavigate } from "react-router-dom"

import React from "react";
export const About=()=>{
    let navigate=useNavigate()
    return (
        <React.Fragment>
    <div> this is about page</div>
<button onClick={()=>{navigate("/")}}> go to home page</button>
</React.Fragment>
)

}