import * as TYPES from '../types/filterCategory';

function filterCategoryReducer(state = '', action) {
  switch (action.type) {
    case TYPES.FILTER_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}

export default filterCategoryReducer;
