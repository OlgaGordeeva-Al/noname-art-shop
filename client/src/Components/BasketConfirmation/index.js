import { useSelector } from "react-redux";
import "./index.scss";

const BasketConfirmation = () => {
  const english = useSelector(state => state.english)

  return (
    <>
      <div className="payment-container">
        <div className="payment-container-navigation">
          <div className="payment-container-navigation__title--after">
            {english ? "BASKET" : "КОРЗИНА ТОВАРОВ"}
          </div>
          <div className="payment-container-navigation__title">
            {english ? "PAYMENT" : "ОПЛАТА ТОВАРОВ"}
          </div>
          <div className="payment-container-navigation__title--choose">
            {english ? "ORDER CONFIRMATION" : "ПОДТВЕРЖДЕНИЕ ЗАКАЗА"}
          </div>
        </div>

        <div className="inputs-area">
          <div className="inputs-area__adress">
            <span>{english ? "Thank you for your order, our manager will contact you shortly to clarify the order details." : "Спасибо за заказ, с Вами скоро свяжется наш менеджер для уточнения заказа."}</span>
          </div>

        </div>
      </div>
    </>
  );
};

export default BasketConfirmation;
