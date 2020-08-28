import React, { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(1);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  return (
    <div>
      <button onClick={increase}> + </button>
      {count}
      <button onClick={decrease}> - </button>
    </div>
  );
};

export default Hooks;
