import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((count) => (count += 1));
        }}
      >
        Increase
      </button>
    </>
  );
};

export default ErrorExample;
