import BasketGoods from '../../Components/BasketGoods';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBasketForUserThunk } from '../../redux/actions/basket';

const Basket = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const userId = useSelector((state) => state.user.id);
  const userBasket = useSelector((state) => state.user.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasketForUserThunk(userId));
  }, [dispatch, userId, userBasket]);

  return <BasketGoods />;
};

export default Basket;
