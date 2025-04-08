import React from 'react'
// import ReactDOM from "react-dom/client";
import { useState } from 'react';
 
const Form = () => {
    const[input,setinput] = useState("");
    const[submittedname,setsubmittedname]=useState("");
    const HandleChange = (e)=>  {
        setinput(e.target.value);
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        setsubmittedname(input);
        setinput("");
        
    }

    return(
        <form onSubmit={HandleSubmit}>
            <input onChange={HandleChange} placeholder='enter your name' type="text" value={input}/>
            <button type="submit">Submit</button>
            {submittedname && 
            (<h1>you entered {submittedname}</h1>)}
            
        </form>
        
            
        
    );
}

const App = () => {
  return (
    <div>
      <Form />
    </div>
  )
}

export default App
