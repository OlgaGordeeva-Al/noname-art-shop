import * as TYPES from '../types/products';

export const setFavs = (arr) => ({
  type: TYPES.GET_FAV_DB,
  payload: arr,
});

export const getFavsForUserThunk = (userId) => async (dispatch, getState) => {
  const response = await fetch(`http://localhost:5000/user/api/v1/favourites/${userId}`);
  const result = await response.json();
  dispatch(setFavs(result));
};
