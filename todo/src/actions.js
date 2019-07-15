export const ADD_TODO = 'ADD_TODO'
export const CHECK_TODO = 'CHECK_TODO'
export const DELETE_TODO = 'DELETE_TODO'


export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: {
            name: todo,
            completed: false,
            id: Date.now()
        }
    }
}

export function checkTodo(todos) {
    return {
        type: CHECK_TODO,
        payload: todos
    }
}

export function deleteTodo(todos) {
    return {
        type: DELETE_TODO,
        payload: todos
    }
}