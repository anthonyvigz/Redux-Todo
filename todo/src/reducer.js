import { ADD_TODO } from './actions'
import { CHECK_TODO } from './actions'
import { DELETE_TODO } from './actions'

const initialState = {
    todos: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const { name, completed, id } = action.payload
            const newList = state.todos.concat([
                { name, completed, id }
            ])

            return {
                ...state,
                todos: newList
            }

        case CHECK_TODO:
            return {
                ...state,
                todos: action.payload
            }

        case DELETE_TODO:
            return {
                ...state,
                todos: action.payload
            }

        default:
            return state;
    }
}