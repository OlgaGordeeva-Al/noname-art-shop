import * as TYPES from '../types/artists'

function artistsReducer(artists = [], action) {
  switch (action.type) {
    case TYPES.GET_ARTISTS:
      return action.payload;
    case TYPES.ADD_NEW_ARTIST:
      return [...artists, action.payload];
    case TYPES.UPDATE_ARTIST:
      return artists.map((el) => {
        if (el._id === action.payload._id) {
          return {
            ...el,
            name: action.payload.name,
            description: action.payload.description,
            id: action.payload._id
          }
        }
        return el
      })
    case TYPES.DELETE_ARTIST:
      return artists.filter(el => el._id!==action.payload)  
    default:
      return artists;
  }
}

export default artistsReducer;
