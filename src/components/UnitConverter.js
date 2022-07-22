import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const UnitConverter = (props) => {
  const { inputValue, inputUnit, handleInputChange } = props;
  return (
    <div className="converter">
      <div className="converter-body">
        <div className="coverter-title">Set</div>
        <input
          type="number"
          className="input-number"
          min="0"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
      </div>
      <span className="angle-icon fa-2x">
        <FontAwesomeIcon icon={solid("angles-right")} />
      </span>
      <div className="converter-body">
        <div className="coverter-title">Show</div>
        <input
          type="number"
          className="input-number readonly"
          value={inputUnit === "Mbps" ? inputValue / 8 : inputValue * 8}
          onChange={handleInputChange}
          disabled
        ></input>
      </div>
    </div>
  );
};

export default UnitConverter;
