// Q3. BMI :   
import React, { useState } from "react";

// BMI Component (Takes weight & height as props and calculates BMI)
const BMI = ({ weight, height }) => {
  if (weight === 0 || height === 0) return <p>Please enter valid values.</p>;

  const bmiValue = (weight / (height * height)).toFixed(2);
  return <p>Your BMI: <strong>{bmiValue}</strong></p>;
};

// Main Component
const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Show BMI after form submission
  };

  return (
    <div className="p-4">
      <h2>BMI Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Height (m)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Calculate BMI
        </button>
      </form>

      {submitted && <BMI weight={parseFloat(weight)} height={parseFloat(height)} />}
    </div>
  );
};

export default BMICalculator;