
import React from 'react';
import style from './ToDoItem.module.css'

function ToDoItem(props) {
   debugger;
   const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through"
  }
   return (
      <div className={style.toDoitem}>
  
         <input name="isGoing"type="checkbox" checked={props.list.completed} onChange={() => props.handleClick(props.list.id)} /> 
         <div style={props.list.completed ? completedStyle: null}>{props.list.text}</div>
         <br />
      
      </div>
   )
}

export default ToDoItem;