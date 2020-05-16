import React from 'react';

import './App.css';
import Button from '../Button';

const App = () => {
  return( 
  <div className="App">
    <div className="top">4:43</div>
    <div className="display">0</div>
    <div className="buttons">
      <Button content = 'AC'/>
      <Button content = '±'/>
      <Button content = '%'/>
      <Button content = '÷'/>
      <Button content = '7'/>
      <Button content = '8'/>
      <Button content = '9'/>
      <Button content = '×'/>
    </div>
    <div className="bottom">-</div>
  </div>
  );
};

export default App;