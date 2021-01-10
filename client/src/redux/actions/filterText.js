import * as TYPES from '../types/filterText';

export const filterProducts = (arr) => ({
  type: TYPES.FILTER_PRODUCTS,
  payload: arr,
});
