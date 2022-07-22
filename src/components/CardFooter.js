import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import { faFaceSadTear } from '@fortawesome/free-regular-svg-icons'
import { faFaceLaughWink } from '@fortawesome/free-regular-svg-icons'
const CardFooter = (props) => {
  const { inputValue, inputUnit } = props;
  let style = {};
  if (!inputValue) {
    style = { title: "---", backgroundColor: "#999999" ,iconName:""  };
  } else if (
    (inputUnit === "Mbps" && inputValue < 15) ||
    (inputUnit === "MB/s" && inputValue < 1.875)
  ) {
    style = { title: "SLOW" , backgroundColor: "#BF6766",iconName:<FontAwesomeIcon icon={faFaceSadTear} />};
  } else if (
    (inputUnit === "Mbps" && inputValue < 40) ||
    (inputUnit === "MB/s" && inputValue < 5)
  ) {
    style = { title: "GOOD", backgroundColor: "#C7802D",iconName:<FontAwesomeIcon icon={faFaceSmile} />};
  } else if (
    (inputUnit === "Mbps" && inputValue >= 40) ||
    (inputUnit === "MB/s" && inputValue >= 5)
  ) {
    style = { title: "FAST", backgroundColor: "#838A2D" ,iconName:<FontAwesomeIcon icon={faFaceLaughWink} />};
  }
  const {backgroundColor,title,iconName} = style;
  return (
    <div
      className="card-footer"
      style={{ backgroundColor: backgroundColor }}
    >
      {iconName}
      {title}
    </div>
  );
};

export default CardFooter;
