import React from 'react';
import './App.css';
import TimedProgressBar from './TimedProgressBar'

function App() {
  return (
    <React.Fragment>
      <TimedProgressBar totalTime={4000} timerInterval={3000} variant="success"/>
      <TimedProgressBar totalTime={4000} timerInterval={1000} variant="danger"/>
      <TimedProgressBar totalTime={4000} timerInterval={1200} variant="warning"/>
    </React.Fragment>
  );
}

export default App;
