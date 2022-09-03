import React, { useState } from "react";
const Counter = ({ props }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter_root_div">
      <input
        type="number"
        min={0}
        style={{ background: "none", border: "none", color: "white" }}
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>{props}</span>
      </div>
    </div>
  );
};

export default Counter;
