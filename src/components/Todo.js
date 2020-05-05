import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './Todo.css'

class Todo extends React.Component {

    

    render() {

        return(

            <div>
                <div onClick={() => {this.props.toggleCompleted(this.props.task.id)}} className={`task${this.props.task.completed ? ' completed' : ''}`}>{this.props.task.task}</div>
            </div>


        )



    }

}
export default Todo