import * as TYPES from '../types/user';

export const addUserRedux = (id, firstname, email, favourites, admin) => ({
  type: TYPES.ADD_USER,
  payload: { id, firstname, email, favourites, admin },
});
export const deleteUserRedux = () => ({
  type: TYPES.DELETE_USER,
});

export const favHandler = (id) => ({
  type: TYPES.FAV_HANDLER,
  payload: id,
});

export const favHandlerThunk = (userId, productId) => async (dispatch, getState) => {
  const response = await fetch(`http://localhost:5000/user/api/v1/favourites`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ userId, productId }),
  });
  if (response.status === 200) return dispatch(favHandler(productId));
};

export const basketHandler = (id) => ({
  type: TYPES.BASKET_HANDLER,
  payload: id,
});

export const basketDelete = () => ({
  type: TYPES.BASKET_DELETE,
});

export const basketHandlerThunk = (userId, productId) => async (dispatch, getState) => {
  const response = await fetch(`http://localhost:5000/basket/api/v1`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ userId, productId }),
  });
  if (response.status === 200) return dispatch(basketHandler(productId));
};

export const orderHandlerThunk = (userId, basketId, address, comment) => async (
  dispatch,
  getState
) => {
  const response = await fetch(`http://localhost:5000/user/api/v1/order`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ userId, basketId, address, comment }),
  });
  if (response.status === 200) return dispatch(basketDelete());
};
