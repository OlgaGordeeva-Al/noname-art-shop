import * as TYPES from '../types/products';

function productsReducer(products = [], action) {
  switch (action.type) {
    case TYPES.GET_PRODUCTS:
      return action.payload;

    case TYPES.SORT_PRODUCTS:
      return action.payload;

    case TYPES.ADD_NEW_ART:
      return [...products, action.payload];
    case TYPES.UPDATE_ART:
      return products.map((el) => {
        if (el._id === action.payload._id) {
          return {
            ...el,
            name: action.payload.name,
            type: action.payload.type,
            color: action.payload.color,
            size: action.payload.size,
            discountPrice: action.payload.discountPrice,
            price: action.payload.price,
            picture: action.payload.picture,
            author: action.payload.author,
            year: action.payload.year,
            description: action.payload.description,
            material: action.payload.material,
            amount: action.payload.amount,
          };
        }
        return el;
      });
    case TYPES.DELETE_ART:
      return products.filter((el) => el._id !== action.payload);

    default:
      return products;
  }
}

export default productsReducer;
