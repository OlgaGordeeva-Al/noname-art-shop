import BasketGoods from '../../Components/BasketGoods';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBasketForUserThunk } from '../../redux/actions/basket';
import { getProductsThunk } from '../../redux/actions/products';
import BasketPayment from '../../Components/BasketPayment';

const Payment = () => {
  const userId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasketForUserThunk(userId));

    return dispatch(getProductsThunk());
  }, [dispatch, userId]);

  return <BasketPayment />;
};

export default Payment;
