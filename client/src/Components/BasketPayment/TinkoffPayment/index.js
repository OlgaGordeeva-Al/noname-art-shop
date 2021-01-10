import { useSelector } from 'react-redux';
import './index.scss';

const TinkoffPayment = () => {
  const userEmail = useSelector((state) => state.user.email);
  const userName = useSelector((state) => state.user.firstname);
  const orderNumber = useSelector((state) => state.basket._id);
  const summ = useSelector((state) => state.basket.summ);
  const english = useSelector(state => state.english);

  return (
    <>
      <div className="tinkoff__inputs-area">
        <script src="https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js"></script>
        <form
          className="tiknof-cont"
          name="TinkoffPayForm"
          onsubmit="pay(this); return false;"
        >
          <input
            className="input"
            type="hidden"
            name="terminalkey"
            value="TinkoffBankTest"
          />
          <input className="input" type="hidden" name="frame" value="true" />
          <input className="input" type="hidden" name="language" value="ru" />
          <input
            className="input"
            type="text"
            placeholder={english ? "Total price" : "Сумма заказа"}
            value={summ}
            readonly="readonly"
            name="amount"
          />
          <input
            className="input"
            type="text"
            placeholder={english ? "Order number" : "Номер заказа"}
            value={orderNumber}
            readonly="readonly"
            name="order"
          />
          <input
            className="input"
            type="text"
            placeholder={english ? "Order description" : "Описание заказа"}
            value="alibabart order"
            name="description"
          />
          <input
            className="input"
            type="text"
            placeholder={english ? "Full name" : "ФИО плательщика"}
            value={userName}
            name="name"
          />
          <input
            className="input"
            type="text"
            placeholder="E-mail"
            value={userEmail}
            name="email"
          />
          <input
            className="input"
            type="text"
            placeholder={english ? "Phone number" : "Контактный телефон"}
            name="phone"
          />
          <button className="payment-button" value={english ? "Pay" : "Оплатить"}>
            {english ? "Pay" : "Оплатить"}
          </button>
        </form>
      </div>
    </>
  );
};

export default TinkoffPayment;
