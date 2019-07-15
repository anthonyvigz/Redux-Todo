import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo, checkTodo, deleteTodo } from '../actions'

class Todo extends Component {  
    constructor() {
		super()
		this.state = {
		}
	}

    // check off todo

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

    // delete todo function

    deleteTodo = () => {
        const id = this.props.todo.id

        const todos = this.props.todos.filter( todo => {
            return todo ? (todo.id != id) : null
        })

        this.props.deleteTodo(todos)
    }
    

    render() {
        return (
        <div className="todocard">
            <div 
                id={this.props.todo.id} 
                onClick={this.checkTodo} 
                className="todo"
                style={this.props.todo.completed ? {textDecoration: "line-through", background: "lightblue"} : null}
            >
                    {this.props.todo.name}
            </div>
            <button onClick={this.deleteTodo}>Delete</button>
        </div>
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
    checkTodo: checkTodo,
    deleteTodo: deleteTodo
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);
