import * as TYPES from '../types/filterColor';

function filterColorReducer(state = '', action) {
  switch (action.type) {
    case TYPES.FILTER_COLOR:
      return action.payload;
    default:
      return state;
  }
}

export default filterColorReducer;
