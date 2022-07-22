import React, { useState } from "react";
import "./App.css";
import UnitControl from "./components/UnitControl";
import CardFooter from "./components/CardFooter";
import UnitConverter from "./components/UnitConverter";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [inputUnit, setInputUnit] = useState("Mbps");
  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };
  const handleCovertClick = () => {
    setInputUnit(inputUnit === "Mbps" ? "MB/s" : "Mbps");
  };
  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl
          inputUnit={inputUnit}
          handleCovertClick={handleCovertClick}
        />
        <UnitConverter
          inputValue={inputValue}
          inputUnit={inputUnit}
          handleInputChange={handleInputChange}
        />
      </div>
      <CardFooter inputValue={inputValue} inputUnit={inputUnit} />
    </div>
  );
}

export default App;
