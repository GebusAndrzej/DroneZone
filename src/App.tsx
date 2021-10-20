import React, { useEffect } from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  useEffect(() => {
    document.title = "Dronezone"
  }, [])
  return (
    <LandingPage></LandingPage>
  );
}

export default App;
