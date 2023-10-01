import { useState,useEffect } from "react";
export const IncrementTest=() =>{
    const [count,setCountValue]=useState(0);
    useEffect(()=>{
        console.log('event mounted');
    },[])
    const UpdateCount = (type) => {
        if(type=="Increment"){
            setCountValue(count+1);
        }
        else if(type=="Decrement"){
            setCountValue(count-1);
        }
        else{
            setCountValue(0);
        }
    }
    return <div>
        <button onClick={() => UpdateCount("Increment")}>Increment</button>
        <button onClick={() => UpdateCount("Decrement")}>Decrement</button>
        <button onClick={() => UpdateCount("setZero")}>SetZero</button>
        {count}
  </div>
}