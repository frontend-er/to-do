
import React from 'react';
import style from './Main.module.css'
import ToDoItem from "./ToDoItem/ToDoItem";

function Main() {
   return (
      <div className={style.mainBody}>
         <ToDoItem />
         <ToDoItem />
         <ToDoItem />
         <ToDoItem />
      </div>
   )
}

export default Main;