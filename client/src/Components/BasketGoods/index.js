import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBasketForUserThunk } from '../../redux/actions/basket';
import { getProductsThunk } from '../../redux/actions/products';
import { Link } from 'react-router-dom';
import { basketHandlerThunk } from '../../redux/actions/user';
import { useHistory } from 'react-router-dom';
import './index.scss';

const BasketGoods = () => {
  const userId = useSelector((state) => state.user.id);
  const english = useSelector(state => state.english);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasketForUserThunk(userId));

    return dispatch(getProductsThunk());
  }, [dispatch, userId]);

  const basket = useSelector((state) => state.basket);
  return (
    <>
      {basket.goods?.length ? (
        <div className="basket-container">
          <div className="basket-container-navigation">
            <div className="basket-container-navigation__title--choose">
              {english ? "BASKET" : "КОРЗИНА ТОВАРОВ"}
            </div>
            <div className="basket-container-navigation__title">{english ? "PAYMENT" : "ОПЛАТА ТОВАРОВ"}</div>
            <div className="basket-container-navigation__title">{english ? "ORDER CONFIRMATION" : "ПОДТВЕРЖДЕНИЕ ЗАКАЗА"}</div>
          </div>

          <div className="basket-container__counter-goods">
            <span className="basket-container__counter-goods__text">
              {basket.goods.length} {english ? "goods in basket" : "товар(ов) в корзине"}
            </span>
          </div>

          <div className="basket-container__goods-area">
            {basket.goods.map((el) => {
              return (
                <div key={el._id} className="basket-container-good-item">
                  <div className="basket-container-good-item__image-area">
                    <img className="image" src={el.picture} alt="foto" />
                  </div>
                  <div className="basket-container-good-item__info-area">
                    <span>{english ? "Title: " : "Название: "} {el.name}</span>
                    <span>{english ? "Author: " : "Автор: "} {el.authorName}</span>
                  </div>
                  <div className="basket-container-good-item__button-area">
                    <button
                      name={el._id}
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(basketHandlerThunk(userId, el._id));
                      }}
                      className="remove-button"
                    >
                      {english ? "remove" : "удалить"}
                    </button>
                  </div>
                  <div className="basket-container-good-item__price-area">
                    {el.price} {english ? "rub." : "руб."}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="basket-container__total-price-area">
            <span className="total-price">{english ? "Total: " : "Итого: "}{basket.summ} {english ? "rub." : "руб."}</span>
          </div>

          <div className="basket-container__buttons-area">
            <button className="keep-shopping-button" onClick={() => history.push('/')}>
              {english ? "go to shopping" : "продолжить покупки"}
            </button>
            <Link to="/payment">
              <button className="checkout-button">{english ? "go to payment" : "перейти к оплате"}</button>
            </Link>
          </div>
        </div>
      ) : (
          <div className="no-items-cart">
            <span className="no-items-cart__text">{english ? "Your basket is empty" : "В корзине нет товаров"}</span>
          </div>
        )}
    </>
  );
};

export default BasketGoods;
