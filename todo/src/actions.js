export const ADD_TODO = 'ADD_TODO'
export const CHECK_TODO = 'CHECK_TODO'


export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: {
            todo
        }
    }
}

export function checkTodo(todo) {
    return {
        type: CHECK_TODO,
        payload: {
            todo
        }
    }
}