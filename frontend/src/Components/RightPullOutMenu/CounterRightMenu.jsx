import React, { useState } from "react";
import "./rightmenu.css";
const Counter = ({ props }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter_root_div_rightMenu">
      <input
        type="number"
        min={0}
        style={{ background: "none", border: "none", color: "white" }}
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <div>
        <span className="counterSpan">{props}</span>
      </div>
    </div>
  );
};

export default Counter;
