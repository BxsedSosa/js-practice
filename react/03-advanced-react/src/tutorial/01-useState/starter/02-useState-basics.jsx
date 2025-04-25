import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>useState basics</h2>

      <h4>You Clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        click
      </button>
    </>
  );
};

export default UseStateBasics;
