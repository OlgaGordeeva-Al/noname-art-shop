import * as TYPES from '../types/user'

function userReducer(user = { favourites: [], basket: [] }, action) {
  switch (action.type) {
    case TYPES.ADD_USER:
      return { ...user, id: action.payload.id, firstname: action.payload.firstname, email: action.payload.email, favourites: action.payload.favourites, basket: action.payload.basket, admin: action.payload.admin };

    case TYPES.FAV_HANDLER:
      return !(user.favourites.findIndex(el => el === action.payload) + 1) ?
        { ...user, favourites: [...user.favourites, action.payload] } :
        { ...user, favourites: user.favourites.filter(el => el !== action.payload) };

    case TYPES.BASKET_HANDLER:
      return !(user.basket.findIndex(el => el === action.payload) + 1) ?
        { ...user, basket: [...user.basket, action.payload] } :
        { ...user, basket: user.basket.filter(el => el !== action.payload) };

    case TYPES.BASKET_DELETE:
      return { ...user, basket: [] };

    case TYPES.DELETE_USER:
      return { favourites: [], basket: [] };

    default:
      return user;
  }
}

export default userReducer;
