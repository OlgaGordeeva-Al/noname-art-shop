import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getBasketForUserThunk } from '../../redux/actions/basket';
import { getProductsThunk } from '../../redux/actions/products';
import CashPayment from './CashPayment';
import TinkoffPayment from './TinkoffPayment';
import { orderHandlerThunk } from '../../redux/actions/user';
import { Link, useHistory } from 'react-router-dom';
import './index.scss';

const BasketPayment = () => {
  const [cash, setCash] = useState(true);
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');
  const userId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  const history = useHistory();
  const english = useSelector(state => state.english);

  const changePaymentType = () => {
    setCash(!cash);
  };

  useEffect(() => {
    dispatch(getBasketForUserThunk(userId));

    return dispatch(getProductsThunk());
  }, [dispatch, userId]);

  const basket = useSelector((state) => state.basket);

  function clickHandler(e) {
    e.preventDefault();
    dispatch(orderHandlerThunk(userId, basket._id, address, comment));
    history.push('/confirmation');
  }

  return (
    <>
      <div className="payment-container">
        <div className="payment-container-navigation">
          <Link to="/basket">
            <div className="payment-container-navigation__title--after">
              {english ? "BASKET" : "КОРЗИНА ТОВАРОВ"}
            </div>
          </Link>
          <div className="payment-container-navigation__title--choose">
            {english ? "PAYMENT" : "ОПЛАТА ТОВАРОВ"}
          </div>
          <div className="payment-container-navigation__title">{english ? "ORDER CONFIRMATION" : "ПОДТВЕРЖДЕНИЕ ЗАКАЗА"}</div>
        </div>

        <div className="inputs-area">
          <div className="inputs-area__adress">
            <input
              type="text"
              className="input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={english ? "Address" : "Адрес доставки"}
            />
            <input
              type="text"
              className="input"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={english ? "Commentary" : "Комментарий к заказу"}
            />
          </div>
          <div className="inputs-area__payment-type">
            <button className="payment-type-button" onClick={() => changePaymentType()}>
              {english ? "Payment by cash / Payment by card" : "Оплата при получении / Оплата картой"}
            </button>
          </div>
          <div>{cash ? <CashPayment /> : <TinkoffPayment />}</div>
          <button className="inputs-area__order-button" onClick={clickHandler}>
            {english ? "Order" : "Заказать"}
          </button>
        </div>
      </div>
    </>
  );
};

export default BasketPayment;
