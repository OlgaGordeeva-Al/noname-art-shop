import * as TYPES from '../types/filterSize';

function filterSizeReducer(state = '', action) {
  switch (action.type) {
    case TYPES.FILTER_SIZE:
      return action.payload;
    default:
      return state;
  }
}

export default filterSizeReducer;
