import React, { useState } from 'react';

const DepartmentLookup = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const data = {
    bce: ["Tithi", "Dipit", "Aman"],
    bcb: ["Riya", "Megha", "Ankit"],
    bds: ["Aryan", "Kriti", "Neha"]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = input.toLowerCase();
    if (data[key]) {
      setResult(data[key]);
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter department code"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {Array.isArray(result) ? (
          <ul>
            {result.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p style={{ color: "red" }}>{result}</p>
        )}
      </div>
    </div>
  );
};

export default DepartmentLookup;
