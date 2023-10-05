import React from 'react';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Hello from './Home/Hello/Hello';
import Resume from './Resume/Resume';
const AppContent = () => {
  return (
    <div>
      <BrowserRouter>
           <Navbar/>
           <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/play'element={<About/>}/>
            <Route path='/resume'element={<Resume/>}/>
         
           </Routes>
           <Home/>
      </BrowserRouter>

    </div>
  );
};

export default AppContent;