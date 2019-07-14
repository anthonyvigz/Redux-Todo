import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo, checkTodo } from '../actions'

class TodoList extends Component {  
    constructor() {
		super()
		this.state = {
			todo: ''
		}
	}

  handleChange = (event) => {
		event.preventDefault()

		this.setState({
			todo: event.target.value,
		})
	}

    addTodo = (event) => {
        event.preventDefault();

        const { todo } = this.state;

        this.props.addTodo(todo);

        this.setState({ todo: '' })
    } 

  render() {
    
    const { todos } = this.props;

    return (
      <div className="list">
          {todos.map( todo => {
            return ( 
            <div className="todo">{todo}</div>
          )})}
        
          <form onSubmit={this.addTodo}>
            <input type="text" placeholder="New Todo!" onChange={this.handleChange} value={this.state.todo}/>
            <button type="submit">Add!</button>
          </form>
      </div>
      );
    }
  }

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = {
    addTodo: addTodo
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
