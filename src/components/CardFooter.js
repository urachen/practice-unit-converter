import React, { useEffect } from "react";

const CardFooter = (props) => {
  const { inputValue, inputUnit } = props;
  let style = {};
  if (!inputValue) {
    style = { title: "---", backgroundColor: "#999999" };
  } else if (
    (inputUnit === "Mbps" && inputValue < 15) ||
    (inputUnit === "MB/s" && inputValue < 1.875)
  ) {
    style = { title: "SLOW", backgroundColor: "#BF6766" };
  } else if (
    (inputUnit === "Mbps" && inputValue < 40) ||
    (inputUnit === "MB/s" && inputValue < 5)
  ) {
    style = { title: "GOOD", backgroundColor: "#C7802D" };
  } else if (
    (inputUnit === "Mbps" && inputValue >= 40) ||
    (inputUnit === "MB/s" && inputValue >= 5)
  ) {
    style = { title: "FAST", backgroundColor: "#838A2D" };
  }

  return (
    <div
      className="card-footer"
      style={{ backgroundColor: style.backgroundColor }}
    >
      {style.title}
    </div>
  );
};

export default CardFooter;
