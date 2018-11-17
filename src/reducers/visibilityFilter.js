import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/todoFilter';
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SHOW_ALL:
      return state;
    case SHOW_ACTIVE:
      return state.filter(t => t.completed);
    case SHOW_COMPLETED:
      return state.filter(t => !t.completed);
    default:
      return state;
  }
};

export default visibilityFilter;
