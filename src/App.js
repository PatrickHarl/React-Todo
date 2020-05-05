import React from 'react';
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import Search from './components/Search'

const todoData = [
  {

    task: 'Learn setState()',
    id: Date.now(),
    completed: false

  },
  {

    task: 'Style my Todo List',
    id: Date.now() + 1,
    completed: false

  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {

    super()

    this.state = {

      todo:todoData,
      todoName:'',
      searchTerm:''

    }
  }
  
  handleChange = (e) => {

    this.setState({

      [e.target.name]: e.target.value

    })

  }

  toggleCompleted = (taskId) => {

    const taskIndex = this.state.todo.findIndex(taskElement => taskElement.id === taskId)

    const newArray = [...this.state.todo]

    newArray[taskIndex] = {...newArray[taskIndex], completed:!newArray[taskIndex].completed}

    this.setState({

      todo: newArray

    })

  }

  clearCompleted = (e) => {

    e.preventDefault()

    const clearedArray = this.state.todo.filter(task => {

      return task.completed === false

    })

    this.setState({


      todo: clearedArray


    })


  }

  addToList = (todoName) => {

    const newItem = {

      task: todoName,
      id: Date.now(),
      completed: false

    }

    this.setState({

      todo: [...this.state.todo, newItem]

    })


  }

  submitForm = (e) => {

    e.preventDefault()

    this.addToList(this.state.todoName)   
    this.setState({

        todoName: ''

    }) 

}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoName={this.state.todoName} submitForm={this.submitForm} handleChange={this.handleChange} clearCompleted={this.clearCompleted} toggleCompleted={this.toggleCompleted} addToList={this.addToList} todo={this.state.todo} searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default App;
