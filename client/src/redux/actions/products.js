import * as TYPES from '../types/products';

export const getProducts = (arr) => ({
  type: TYPES.GET_PRODUCTS,
  payload: arr,
});

export const sortProducts = (arr) => ({
  type: TYPES.SORT_PRODUCTS,
  payload: arr,
});

export const getProductsThunk = () => async (dispatch, getState) => {
  const response = await fetch('http://localhost:5000/goods/api/v1/products');
  const result = await response.json();
  dispatch(getProducts(result.products));
};

export const update_products = (product) => ({
  type: TYPES.UPDATE_ART,
  payload: product
})

export const new_art = (artist) => ({
  type: TYPES.ADD_NEW_ART,
  payload: artist,
});

export const new_art_thunk = (values) => async (dispatch, getState) => {
  if (values) {
    const response = await fetch('http://localhost:5000/products/api/v1/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ values }),
    });
    if (response.status === 200) {
      const result = await response.json();
      dispatch(new_art(result));
    }
  }
};


export const update_art_thunk = ({ changed }) => (
  dispatch,
  getState
) => {
  fetch(`http://localhost:5000/products/api/v1/${changed.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ changed }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((product) => product && dispatch(getProducts(product)));
};

export const delete_art = (id) => ({
  type: TYPES.DELETE_ART,
  payload: id,
});

export const delete_art_thunk = (id) => (dispatch, getState) => {
  fetch(`http://localhost:5000/products/api/v1/${id}`, {
    method: 'DELETE',
  }).then((res) => res.status === 200 && dispatch(delete_art(id)));
};
