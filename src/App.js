import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './style.css';


const tasks =
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
   constructor() {
     super();
     this.state = {
       tasks: tasks
     };
   }

   handleClearCompleted = () => {
     this.setState({
       ...this.state,
       tasks: this.state.tasks.filter(task => {
         return !task.completed;
       })
     });
   }

   handleAddTask = (taskName) => {
     const newTask = {
       task: taskName,
       id: Date.now,
       completed: false
     };

      this.setState({
        ...this.state,
        tasks: [...this.state.tasks, newTask]
      });
   }

   handleToggleTask = (selectedTask) => {
     this.setState({
       ...this.state,
       tasks: this.state.tasks.map(task => {
         if (task.id === selectedTask.id) {
           return ({...task, completed: !task.completed})
         } else {
           return task;
         }
       })
     })
   }


  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>To Do List</h1>
          <TodoForm handleAddTask={this.handleAddTask}/>
         </div>
         <TodoList handleToggleTask={this.handleToggleTask} tasks={this.state.tasks} />
        <button onClick={this.handleClearCompleted} className='clear-btn'>Clear Completed</button>
      </div>
    );
  }
}

export default App;
