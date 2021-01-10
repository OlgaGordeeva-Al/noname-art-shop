import BasketConfirmation from '../../Components/BasketConfirmation';
import { useEffect } from 'react';

const OrderConfirmation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BasketConfirmation />
    </>
  );
};

export default OrderConfirmation;
