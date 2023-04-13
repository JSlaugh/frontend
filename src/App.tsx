import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/landing';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        {/* This is the location where all of the extra components are thrown in */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
