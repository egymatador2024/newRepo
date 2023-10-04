import React from 'react';
import ball from './1.png';
import './SplashScreen.css'
const SplashScreen = () => {
  return (
    <div id="body">
     <div   style={{ textAlign: 'center', marginTop: '300px' }}>
      <img id='imgu' src={ball} alt="Bouncing Ball" style={{ width: '100px' }} />
      
    </div>   
    </div>
    
    
  );
};

export default SplashScreen;