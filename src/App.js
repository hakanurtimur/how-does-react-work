import React, { useCallback, useState, useMemo } from "react";

import Button from "./components/UI/Button/Button";
import DemoList from "./components/Demo/DemoList"

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [title, setTitle] = useState('Setting New Title')

  const allowToggleHandler = useCallback(() => {
    setAllowToggle(true);
  }, []);

  const toggleParahraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowP((prevState) => !prevState);
    }
  }, [allowToggle]);

  const titleChangeHandler = useCallback(() => {

    setTitle('This is new!')
  }, [])

  const list = useMemo(()=> {
    return [1, 7, 9, 3, 5]}, [])

  


  




  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={title} list={list}></DemoList>
      <Button onClick={titleChangeHandler}>{title}</Button>
      
      <DemoOutput  isShown={showP}></DemoOutput>
      <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
      <Button onClick={toggleParahraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
