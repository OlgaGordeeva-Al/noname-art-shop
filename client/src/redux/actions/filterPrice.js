import * as TYPES from '../types/filterPrice';

export const filterPrice = (arr) => ({
  type: TYPES.FILTER_PRICE,
  payload: arr,
});
