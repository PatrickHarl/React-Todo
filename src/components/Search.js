import React from 'react'
import './Todo.css'

class Search extends React.Component {
 

render() {

    return(


        <div>

            <input className='search' placeholder='search' onChange={this.props.handleChange} type='text' name='searchTerm' value={this.props.searchTerm} />

        </div>




    )



}



}
export default Search