const initState = () => {
  const init = {
    filterCategory: '',
    filterText: '',
    filterColor: '',
    filterPrice: -1,
    filterSize: '',
    favorites: [],
    products: [],
    basket: {},
    user: { favourites: [], basket: [] },
    orders: [],
    artist: {},
    artists: [],
    goodsOne: {},
    authForm: false,
    english: true,
  };

  return JSON.parse(localStorage.getItem('store')) || init;
};

export default initState;
