import React from 'react';
import './App.css';
import TimedProgressBar from './TimedProgressBar'

function App() {
  return (
    <React.Fragment>
      <TimedProgressBar totalTime={4000} timerInterval={3000}/>
      <TimedProgressBar totalTime={4000} timerInterval={1000}/>
    </React.Fragment>
  );
}

export default App;
