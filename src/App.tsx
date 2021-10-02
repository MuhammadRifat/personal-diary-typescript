import React from 'react';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <>
      <h1 style={{textAlign: 'center', backgroundColor: 'gray', color: 'white', padding: '10px'}}>Personal Diary</h1>
      <Home />
    </>
  );
}

export default App;
