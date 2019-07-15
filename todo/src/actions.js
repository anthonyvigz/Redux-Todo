export const ADD_TODO = 'ADD_TODO'
export const CHECK_TODO = 'CHECK_TODO'


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