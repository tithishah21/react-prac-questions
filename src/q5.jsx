// Q4. FORM VALIDATION

import React, { useState } from "react";

const SimpleForm = () => {
  const [inputVal, setInputVal] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setInputVal(e.target.value);
    setError(""); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputVal.trim() === "") {
      setError("Field cannot be empty!");
      setSuccess("");
    } else {
      setSuccess(`Submitted: ${inputVal}`);
      setError("");
      setInputVal(""); // Clear input field
    }
  };

  return (
    <div className="p-4">
      <h2>Simple Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputVal}
          onChange={handleChange}
          placeholder="Enter text"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Success Message */}
      {success && <p className="text-green-500">{success}</p>}
    </div>
  );
};

export default SimpleForm;
