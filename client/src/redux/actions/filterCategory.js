import * as TYPES from '../types/filterCategory';

export const filterCategory = (arr) => ({
  type: TYPES.FILTER_CATEGORY,
  payload: arr,
});
