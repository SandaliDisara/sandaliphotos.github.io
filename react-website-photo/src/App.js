import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Photos from './components/pages/photos';
import Vlogs from './components/pages/vlogs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    
      <Router>
        <div className='App'>
          <Routes>
         
        
          <Route path='/' element={<><Navbar/><Home/></>} />
          <Route path='/photos' element={<><Navbar/><Photos/></>} />
          <Route path='/vlogs' element={<><Navbar/><Vlogs/></>} />
          
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;