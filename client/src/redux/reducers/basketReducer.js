import * as TYPES from '../types/products';

function basketReducer(basket = {}, action) {
  switch (action.type) {
    case TYPES.GET_BASKET_DB:
      return action.payload;

    default:
      return basket;
  }
}

export default basketReducer;
