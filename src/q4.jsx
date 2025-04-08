// Task-2 I. Design a form with an input field and a submit button. The onChange event is attached to the input field to handle changes in its value. II. The onSubmit event is attached to the form element to handle form submission. III. Two additional <div> elements are used to demonstrate handling of onMouseOver and onMouseOut events. When the mouse is over the first <div>, it displays a message, and when the mouse moves out, it shows another message.
// CODE:
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const Form = () => {
  const [msg,setMsg] = useState("");
  const [inputVal,setInputVal] = useState("");
  const handleChange = (e) =>{
    setInputVal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`submitted: ${inputVal}`);
    setInputVal("");
  };

  return (
    <div>
      <h1>hello all</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={inputVal}
          onChange={handleChange}
          placeholder='enter text'
        />
        <button type="submit">submit</button>
      </form>

      <div onMouseOver = {()=>setMsg("mouse is oveer the msg")}
      onMouseOut={() => setMsg("Mouse left the first div!")}>
      hover me!

      </div>

      <p>{msg}</p>
    </div>
    
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form />);