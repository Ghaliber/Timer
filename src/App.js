import React from 'react';
import Timer from './Timer'
import './App.css';
const MilliSec = 8655000
function App() {
  return (
    <div>
     <Timer time={MilliSec} />
    </div>
  );
}

export default App;
