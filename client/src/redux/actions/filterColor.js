import * as TYPES from '../types/filterColor';

export const filterColor = (arr) => ({
  type: TYPES.FILTER_COLOR,
  payload: arr,
});
