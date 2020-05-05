import React from 'react'

class TodoForm extends React.Component {
    

    render() {


        return (


            <form className='form' onSubmit={this.props.submitForm}>

                <input placeholder='...todo' onChange={this.props.handleChange} type='text' name='todoName' value={this.props.todoName} />
                <button type='submit'>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>



            </form>



        )



    }


}
export default TodoForm