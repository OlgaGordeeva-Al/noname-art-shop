import * as TYPES from '../types/filterPrice';

function filterPriceReducer(state = -1, action) {
  switch (action.type) {
    case TYPES.FILTER_PRICE:
      return action.payload;
    default:
      return state;
  }
}

export default filterPriceReducer;
