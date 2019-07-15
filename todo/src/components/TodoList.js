import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo, checkTodo } from '../actions'
import Todo from './Todo'

class TodoList extends Component {  
    constructor() {
		super()
		this.state = {
			todo: ''
		}
	}

  // handle change event

  handleChange = (event) => {
		event.preventDefault()

		this.setState({
			todo: event.target.value,
		})
	}

  // add a todo item to the list and reset the component state

  addTodo = (event) => {
      event.preventDefault();

      const { todo } = this.state;

      this.props.addTodo(todo);

      this.setState({ todo: '' })
   }

  

  // render the list of todos and the submit form 

  render() {
    
    const { todos } = this.props;

    return (
      <div className="list">
          {todos.map( todo => {
            return ( 
              <Todo todo={todo} key={todo.id} checkTodo={this.checkTodo} />
          )})}
        
          <form onSubmit={this.addTodo}>
            <input type="text" placeholder="New Todo!" onChange={this.handleChange} value={this.state.todo}/>
            <button type="submit">Add!</button>
          </form>
      </div>
      );
    }
  }

// getting the props from the redux state store

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

// getting the actions props from redux state

const mapDispatchToProps = {
    addTodo: addTodo,
    checkTodo: checkTodo
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
