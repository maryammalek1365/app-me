import { useEffect, useState } from "react";

const Text=()=>{
    const[text,setText]=useState("");
    useEffect(()=>{
        console.log("mount")
return ()=>{
  console.log(" unmount")
}
},[])
   useEffect(()=>{
        console.log("update")
        }, [text] );

        
 return (
    <div>
      <input
       
        onChange={(e) => setText(e.target.value)} />
      <h1>{text}</h1>
    </div>
  );
};

export default Text;
 




