import React from 'react';
import Navbar from './Navbar/Navbar';
import { Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Hello from './Home/Hello/Hello';
import Resume from './Resume/Resume';
const AppContent = () => {
  return (
    <div>
      <Router>
           <Navbar/>
           <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/play'element={<About/>}/>
            <Route path='/resume'element={<Resume/>}/>
         
           </Routes>
      </Router>

    </div>
  );
};

export default AppContent;