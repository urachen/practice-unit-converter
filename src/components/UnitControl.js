import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const UnitControl = (props) => {
  const { inputUnit, handleCovertClick } = props;
  return (
    <div className="unit-control">
      <div className="unit">{inputUnit}</div>
      <span
        className="exchange-icon fa-fw fa-stack"
        onClick={handleCovertClick}
      >
        <FontAwesomeIcon icon={regular("circle")} className="fa-stack-2x" />
        <FontAwesomeIcon icon={solid("exchange-alt")} className="fa-stack-1x" />
      </span>
      <div className="unit">{inputUnit === "Mbps" ? "MB/s" : "Mbps"}</div>
    </div>
  );
};

export default UnitControl;
