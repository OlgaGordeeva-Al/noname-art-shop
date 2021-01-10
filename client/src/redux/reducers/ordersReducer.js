import * as TYPES from '../types/orders';

function ordersReducer(orders = [], action) {
  switch (action.type) {
    case TYPES.GET_ORDERS:
      return action.payload;

    default:
      return orders;
  }
}

export default ordersReducer;
