import * as TYPES from '../types/products';

function favoritesReducer(favorites = [], action) {
  switch (action.type) {
    case TYPES.GET_FAV_DB:
      return action.payload;

    default:
      return favorites;
  }
}

export default favoritesReducer;
