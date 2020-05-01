import React from 'react';
import './App.css';
import TimedProgressBar from './TimedProgressBar'

function App() {
  return (
    <React.Fragment>
      <TimedProgressBar totalTime={12000} timerInterval={3000} variant="success"/>
      <TimedProgressBar totalTime={12000} timerInterval={4000} variant="danger"/>
      <TimedProgressBar totalTime={12000} timerInterval={6000} variant="info"/>
      <TimedProgressBar totalTime={12000} timerInterval={12000} variant="warning"/>
    </React.Fragment>
  );
}

export default App;
