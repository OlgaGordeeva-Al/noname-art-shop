import * as TYPES from '../types/orders';

export const setOrders = (arrOrders) => ({
  type: TYPES.GET_ORDERS,
  payload: arrOrders,
});

export const getOrdersThunk = (userId) => async (dispatch, getState) => {
  const response = await fetch(`http://localhost:5000/user/api/v1/order/${userId}`);
  const result = await response.json();

  if (response.status !== 500) return dispatch(setOrders(result));
};
