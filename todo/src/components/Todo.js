import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo, checkTodo } from '../actions'

class Todo extends Component {  
    constructor() {
		super()
		this.state = {
		}
	}

    checkTodo = (event) => {
        
        const id = parseInt(event.target.id)
        
        const todos = this.props.todos.map( todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                return todo;
            } else {
                return todo;
            }
        })

        this.props.checkTodo(todos)
    }
    

    render() {
        return (
        <div id={this.props.todo.id} onClick={this.checkTodo} className="todo">{this.props.todo.name}</div>
            )
    }
}


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
)(Todo);
