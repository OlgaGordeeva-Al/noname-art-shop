import { combineReducers } from 'redux';
import ordersReducer from './ordersReducer';
import userReducer from './userReducer';
import artistsReducer from './artistsReducer';
import artistReducer from './artistReducer';
import authFormReducer from './authFormReducer';
import productsReducer from './productsReducer';
import filterTextReducer from './filterTextReducer';
import filterColorReducer from './filterColorReducer';
import filterPriceReducer from './filterPriceReducer';
import filterSizeReducer from './filterSizeReducer';
import filterCategoryReducer from './filterCategoryReducer';
import basketReducer from './basketReducer';
import favoritesReducer from './favoritesReducer';
import languageReducer from './languageReducer';

const rootReducer = combineReducers({
  user: userReducer,
  orders: ordersReducer,
  artists: artistsReducer,
  artist: artistReducer,
  // goodsOne: goodsOneReducer,
  authForm: authFormReducer,
  products: productsReducer,
  filterText: filterTextReducer,
  filterCategory: filterCategoryReducer,
  filterColor: filterColorReducer,
  filterPrice: filterPriceReducer,
  filterSize: filterSizeReducer,
  basket: basketReducer,
  favorites: favoritesReducer,
  english: languageReducer,
});

export default rootReducer;
