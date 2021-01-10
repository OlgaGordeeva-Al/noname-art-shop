import "./index.scss";
import { useSelector } from 'react-redux';

const CashPayment = () => {
  const english = useSelector(state => state.english);

  return (
    <>
      <input type="text" className="input" placeholder={english ? "Phone number" : "Контактный телефон"} name="phone" />
    </>
  );
};

export default CashPayment;
