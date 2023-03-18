import React, {useState} from 'react';

import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';






function App() {


  const [showP , setShowP] =useState(false);

  const toggleParahraphHandler = () => {

    setShowP(prevState => !prevState)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput isShown = {showP}></DemoOutput>
      <Button onClick={toggleParahraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
