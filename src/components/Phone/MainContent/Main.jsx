
import React from 'react';
import style from './Main.module.css'
import ToDoItem from "./ToDoItem/ToDoItem";
import ToDoInput from "./ToDoInput/ToDoInput";
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

   addTask = (task) => {
      this.setState(state => {
         let {todos} = state;
         todos.push({
            id: todos.length !== 0 ? todos.length+1  : 0,
            text: task,
            completed: false
         })
         return todosData;
      })
      
   }
    
   render () {
      let todoItems = this.state.todos.map((i) => { return <ToDoItem handleClick={this.handleClick}  key={i.id} list={i} />});
      return (
         <div className={style.mainBody}>

            {todoItems}
            <ToDoInput addTask={this.addTask} />

         </div>
      )
   }

}

export default Main;