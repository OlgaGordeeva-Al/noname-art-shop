import './index.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersThunk } from '../../redux/actions/orders';

const OrdersHistory = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);
  useEffect(() => {
    dispatch(getOrdersThunk(userId));
  }, [dispatch, userId]);

  const orders = useSelector((state) => state.orders);
  const english = useSelector((state) => state.english);

  return (
    <div className="no-orders">
      {orders.length ? (
        <ul className="orders-list">
          {orders.map((el, index) => (
            <li className="orders-list__item" key={el._id}>
              <span>
                {english ? 'Order' : 'Заказ'} №{index}
              </span>
              <span>
                {english ? 'Order date:' : 'Дата заказа:'} {el.date.substring(0, 10)}
              </span>
              <span>
                {english ? 'Order status:' : 'Статус заказа:'} {el.status}
              </span>
              <span>
                {english ? 'Order list:' : 'Состав заказа:'}{' '}
                {el.goods.map(
                  (order, index) =>
                    `${order.name}${index === el.goods.length - 1 ? '.' : ', '}`
                )}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <span className="no-orders-text">
          {english ? 'There are no orders' : 'Пока нет подтвержденных заказов'}
        </span>
      )}
    </div>
  );
};

export default OrdersHistory;
