import * as TYPES from '../types/products';

export const setBasket = (basketObj) => ({
  type: TYPES.GET_BASKET_DB,
  payload: basketObj,
});

export const getBasketForUserThunk = (userId) => async (dispatch, getState) => {
  const responseBasket = await fetch(`http://localhost:5000/basket/api/v1/${userId}`);
  const resultBasket = await responseBasket.json();
  dispatch(setBasket(resultBasket));
};
