// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import Search from './Search'

class TodoList extends React.Component {
    

   

  render() {



    return(


        <div>

            <Search searchTerm={this.props.searchTerm} handleChange={this.props.handleChange} />
            
            {this.props.todo.map(task => {

                if(task.task.includes(this.props.searchTerm))
                {
                return <Todo toggleCompleted={this.props.toggleCompleted} task={task} />
                }

            })
        }
            
            
            <TodoForm submitForm={this.props.submitForm} todoName={this.props.todoName} handleChange={this.props.handleChange} clearCompleted={this.props.clearCompleted} addToList={this.props.addToList} />
            
        </div>


    )


  }  



}
export default TodoList