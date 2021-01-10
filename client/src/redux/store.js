import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import initState from './initState';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initState(),
  middleware: [thunk],
});

store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState()));
});

export default store;
