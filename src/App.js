import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Edit from './components/Edit';
import Home from './components/Home';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/add" element={<Add />}/>
       <Route path="/edit/:id" element={<Edit />}/>
      </Routes> 
    </div>
  );
}

export default App;
