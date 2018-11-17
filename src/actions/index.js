import * as actionTypes from '../constants/actionType'

export const addTodo = (text) => ({
    type: actionTypes.ADD_TODO,
    text
})

export const completeTodo = (id) => ({
    type: actionTypes.COMPLETE_TODO,
    id
})