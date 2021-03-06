import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import randomColor from "randomcolor";

export default function Playground() {
  const [count, setCount] = useState(0);

  const inputRef = useRef();

  const [color, setColor] = useState(null);
  useEffect(() => {
    setColor(randomColor());
    inputRef.current.focus();
  }, [count]);

  const calculate = useCallback(<Calculate />, [count]);

  return (
    <div style={{ borderTop: `10px solid ${color}` }}>
      {count}
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>
        -
      </button>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>
      <hr />
      <input
        ref={inputRef}
        type="range"
        onChange={(e) => setCount(e.target.value)}
        value={count}
      />
      {calculate}
    </div>
  );
}
function Calculate(num) {
  const renderCount = useRef(1);
  return <div>{renderCount.current++}</div>;
}
