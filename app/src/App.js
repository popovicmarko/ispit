import './App.css';
import React from 'react';
import Heder from './components/Heder/Heder';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <NavBar />
      </div>
      <div className='row'>
        <Heder />
        <Home />
        
      </div>
    </div>
  );
}

export default App;
