import * as TYPES from '../types/artists';
export const getArtists = (arr) => ({
  type: TYPES.GET_ARTISTS,
  payload: arr,
});

export const getArtistsThunk = () => async (dispatch, getState) => {
  const response = await fetch('http://localhost:5000/artists/api/v1/all');
  const result = await response.json();
  dispatch(getArtists(result.artists));
};

export const new_artist = (artist) => ({
  type: TYPES.ADD_NEW_ARTIST,
  payload: artist,
});

export const new_artist_thunk = ({ name, description }) => async (dispatch, getState) => {
  if (name && description) {
    const response = await fetch('http://localhost:5000/artists/api/v1/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description }),
    });
    if (response.status === 200) {
      const result = await response.json();
      dispatch(new_artist(result));
    }
  }
};
export const update_artist = (data) => ({
  type: TYPES.UPDATE_ARTIST,
  payload: data,
});

export const update_artist_thunk = ({ id, name, description }) => (
  dispatch,
  getState
) => {
  fetch(`http://localhost:5000/artists/api/v1/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, description }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((data) => data && dispatch(update_artist(data)));
};

export const delete_artist = (id) => ({
  type: TYPES.DELETE_ARTIST,
  payload: id,
});

export const delete_artist_thunk = (id) => (dispatch, getState) => {
  fetch(`http://localhost:5000/artists/api/v1/${id}`, {
    method: 'DELETE',
  }).then((res) => res.status === 200 && dispatch(delete_artist(id)));
};
