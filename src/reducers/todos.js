import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED,
  COMPLETE_ALL_TODOS,
  COMPLETE_TODO
} from '../constants/actionType';

const initialState = [
  {
    id: 0,
    text: 'Use todo',
    completed: false
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          text: action.text,
          completed: false
        }
      ];
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }));
    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);
    default:
      return state;
  }
};
