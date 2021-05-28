
import React from 'react';
import style from './ToDoInput.module.css';

class ToDoInput extends React.Component {
   constructor (props) {
      super(props);
      this.state = {
         input: ''
      }
      
   }

   addTask = () => {
      const {input} = this.state
      if(input) {
         this.props.addTask(input);
         this.setState({input: ''})
      }
   }

   inputChange = (e) => {
      this.setState({input: e.target.value})
   }

   render() {
      const {input} = this.state
      return (
         <div className={style.inputTask}> 
            <input value={input} onChange={this.inputChange}></input>
            <button onClick={this.addTask}>ADD</button>
   

         </div>
      )
   }
   
}

export default ToDoInput;