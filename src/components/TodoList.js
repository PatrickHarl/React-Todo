// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

class TodoList extends React.Component {

  render() {



    return(


        <div>

            {this.props.todo.map(task => {

                return <Todo toggleCompleted={this.props.toggleCompleted} task={task} />

            })}
            <TodoForm clearCompleted={this.props.clearCompleted} addToList={this.props.addToList} />
            
        </div>


    )


  }  



}
export default TodoList