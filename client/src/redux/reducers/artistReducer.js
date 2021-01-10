import * as TYPES from '../types/artist'

function artistReducer(artist = {}, action) {
  switch (action.type) {
    case TYPES.GET_ONE_ARTIST:
      return action.payload;
    default:
      return artist;
  }
}

export default artistReducer;
