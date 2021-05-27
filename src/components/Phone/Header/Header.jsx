
import React from 'react';
import style from './Header.module.css';

function Header() {
   const date = new Date()
   const hours = date.getHours()
   let timeOfDay
   

   if (hours < 12) {
     timeOfDay = "morning"
   } else if (hours >= 12 && hours < 17) {
     timeOfDay = "afternoon"
   } else {
     timeOfDay = "night"
   }
   let getMounth = () => {
      switch(date.getMonth()) {
         case 1:
            return "Ian";
         case 2: 
            return "Feb";
         case 3: 
            return "Mar";
         case 4: 
            return "April";
         case 5: 
            return "Mai";
         case 6: 
            return "Jun";
         case 7:
            return "June";
         case 8: 
            return "Aug";
         case 9: 
            return "Sep";
         case 10: 
            return "Oct";
         case 11: 
            return "Nov";
         case 12: 
            return "Dec";
         default:
            return 0;
   
      }
   }
  
   return (
      <div>
         <h3 className={style.header}>{date.getDate()} {getMounth()} </h3>
         <h1 className={style.title}>Good {timeOfDay}!</h1>
     </div>
   )
}

export default Header;