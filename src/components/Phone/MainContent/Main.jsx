
import React from 'react';
import style from './Main.module.css'
import ToDoItem from "./ToDoItem/ToDoItem";
import todosData from "./../../../todoData";

class Main extends React.Component {
   constructor () {
      super()
      this.state = {
         todos: todosData
      }
      this.handleClick = this.handleClick.bind(this)
   }

   handleClick (id) {
      debugger;
      this.setState(prevState => {
         const updatedTodos = prevState.todos.map(todo => {
             if (todo.id === id) {
                 todo.completed = !todo.completed
             }
             return todo
         })
         return {

             todos: updatedTodos
             
         }
     })
   }
    
   render () {
      let todoItems =   this.state.todos.map((i) => { return <ToDoItem handleClick={this.handleClick}  key={i.id} list={i} />});
      return (
         <div className={style.mainBody}>
            {todoItems}
         </div>
      )
   }

}

export default Main;