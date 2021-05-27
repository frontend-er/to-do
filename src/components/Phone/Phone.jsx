
import React from 'react';
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import Main from "./MainContent/Main";
import style from './Phone.module.css';


function Phone() {
   return (
      <div className={style.phone}>
    

         <div className="phone">
    
            <div className="toggleButton Button"></div>
            <div className="volumeButtonUp Button"></div>
            <div className="volumeButtonDown Button"></div>
            <div className="powerButton Button"></div>
            <Header/>
            <Main />
            <Footer/>
         </div>
      </div>
        
    
    
         
      
  
    
      
   )
}

export default Phone;