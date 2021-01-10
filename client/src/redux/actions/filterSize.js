import * as TYPES from '../types/filterSize';

export const filterSize = (arr) => ({
  type: TYPES.FILTER_SIZE,
  payload: arr,
});
