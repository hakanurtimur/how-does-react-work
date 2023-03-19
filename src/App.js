import React, { useCallback, useState } from "react";

import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const allowToggleHandler = useCallback(() => {
    setAllowToggle(true);
  }, []);

  const toggleParahraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowP((prevState) => !prevState);
    }
  }, [allowToggle]);


  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput isShown={showP}></DemoOutput>
      <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
      <Button onClick={toggleParahraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
