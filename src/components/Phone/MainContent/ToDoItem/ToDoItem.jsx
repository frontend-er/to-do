
import React from 'react';
import style from './ToDoItem.module.css'

function ToDoItem(props) {
   return (
      <div className={style.toDoitem}>
  
         <input name="isGoing"type="checkbox"/>  Buy a book
         <br />
      
      </div>
   )
}

export default ToDoItem;