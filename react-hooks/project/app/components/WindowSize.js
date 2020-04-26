import React, { useState, useEffect } from "react";

export default function WindowSize() {
  // Note that we are using array destructuring inside of an array destructuring.
  const [[windowWidth, windowHeight], setWindowSize] = useState(
    window.innerWidth
  );
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // Note that timeoutId uses a closure. That is it is declared outside of the
    // handleResize function but the function still has access to it.
    let timeoutId;
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      setVisible(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setVisible(false), 500);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      // Note that we are returning a function that will clean up after the effect.
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`window-size ${visible ? "" : "hidden"}`}>
      {windowWidth} x {windowHeight}
    </div>
  );
}
