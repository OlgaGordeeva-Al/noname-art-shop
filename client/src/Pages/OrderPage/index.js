import './index.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { basketHandlerThunk } from '../../redux/actions/user';
import PictureItem from '../../Components/Pictures/PictureItem';
import * as AC from '../../redux/actions/authForm';
import { useEffect } from 'react';

const OrderPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id: productId } = useParams();
  const art = useSelector((state) => state.products.find((el) => el._id === productId));
  const userId = useSelector((state) => state.user?.id);
  const basket = useSelector((state) => state.user?.basket);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const english = useSelector((state) => state.english);
  const moreProducts = products
    .filter((el) => el.color.match(art.color))
    .filter((el) => el._id !== art._id);

  const clickHandler = (e) => {
    e.preventDefault();
    if (userId) {
      dispatch(basketHandlerThunk(userId, productId));
    } else {
      dispatch(AC.showAuthForm(true));
    }
  };

  return (
    <div className="order-container">
      <div className="order-container__art-card">
        <img className="pictures-container__img" src={art.picture} alt="img" />
      </div>
      <div className="order-container__about">
        <span className="order-container__about-text">{english ? "Title:" : "Название:"} {art.name}</span>
        <span className="order-container__about-text">{english ? "Author:" : "Автор:"} {art.authorName}</span>
        <span className="order-container__about-text">{english ? "Material:" : "Материал:"} {art.material}</span>
        <span className="order-container__about-text size-text">{english ? "Size:" : "Размер:"} {art.size}</span>
        <span className="order-container__about-text price-text">
          {english ? "Price:" : "Цена:"} {art.price} {english ? "rub." : "руб."}
        </span>
        <span className="btn-buy" onClick={clickHandler}>
          {basket.find((el) => el === productId) + 1
            ? (english ? 'Remove from Basket' : 'Удалить из корзины')
            : (english ? 'Add to Basket' : 'Добавить в корзину')}
        </span>
      </div>

      <ul className="more-products-list">
        {moreProducts.length
          ? moreProducts.map((el) => (
            <PictureItem
              id={el._id}
              img={el.picture}
              author={el.authorName}
              name={el.name}
              price={el.price}
              key={el._id}
            />
          ))
          : null}
      </ul>
    </div>
  );
};

export default OrderPage;
