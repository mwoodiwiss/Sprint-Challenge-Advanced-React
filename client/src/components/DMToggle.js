import React from "react";
import useToggleMode from "../hooks/useToggleMode";

export function Toggle({ mode, initialValue, cssClass, content }) {
  const [isModeOn, setIsModeOn] = useToggleMode(mode, initialValue, cssClass);
  const toggleMode = event => {
    event.preventDefault();
    setIsModeOn(!isModeOn);
  };

  return (
    <button className="toggle" onClick={toggleMode}>
      {content}
    </button>
  );
}
