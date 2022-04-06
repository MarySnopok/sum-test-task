import React from "react";

export const ButtonGrid = ({ onButtonClick }) => {
  return (
    <div className="grid">
      <button className="gridBtn" value="1" onClick={onButtonClick}>
        1
      </button>
      <button className="gridBtn" value="2" onClick={onButtonClick}>
        2
      </button>
      <button className="gridBtn" value="3" onClick={onButtonClick}>
        3
      </button>
      <button className="gridBtn" value="4" onClick={onButtonClick}>
        4
      </button>
      <button className="gridBtn" value="5" onClick={onButtonClick}>
        5
      </button>
      <button className="gridBtn" value="6" onClick={onButtonClick}>
        6
      </button>
      <button className="gridBtn" value="7" onClick={onButtonClick}>
        7
      </button>
      <button className="gridBtn" value="8" onClick={onButtonClick}>
        8
      </button>
      <button className="gridBtn" value="9" onClick={onButtonClick}>
        9
      </button>
      <button className="gridBtn" value="*" onClick={onButtonClick}>
        *
      </button>
      <button className="gridBtn" value="0" onClick={onButtonClick}>
        0
      </button>
      <button className="gridBtn" value="#" onClick={onButtonClick}>
        #
      </button>
    </div>
  );
};
