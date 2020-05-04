import React from 'react'

class TodoForm extends React.Component {
    constructor() {

        super()

        this.state = {

            todoName: ''

        }

    }

    handleChange = (e) => {

        this.setState({
    
          todoName: e.target.value
    
        })
    
      }
    
    submitForm = (e) => {

        e.preventDefault()
    
        this.props.addToList(this.state.todoName)   
        this.setState({

            todoName: ''

        }) 
    
    }

    render() {


        return (


            <form onSubmit={this.submitForm}>

                <input placeholder='...todo' onChange={this.handleChange} type='text' name='todo' value={this.state.todoName} />
                <button type='submit'>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>



            </form>



        )



    }


}
export default TodoForm