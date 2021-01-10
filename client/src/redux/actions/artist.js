import * as TYPES from '../types/artist'

export const filterCategory = (id) => ({
  type: TYPES.GET_ONE_ARTIST,
  payload: id,
});


