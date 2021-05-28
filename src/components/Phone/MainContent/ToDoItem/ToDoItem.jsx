
import React from 'react';
import style from './ToDoItem.module.css'

function ToDoItem(props) {
   debugger;
   return (
      <div className={style.toDoitem}>
  
         <input name="isGoing"type="checkbox" checked={props.list.completed} onChange={() => props.handleClick(props.list.id)} />  {props.list.text}
         <br />
      
      </div>
   )
}

export default ToDoItem;