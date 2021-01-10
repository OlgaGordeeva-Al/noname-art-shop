import { useSelector } from 'react-redux';
import Signout from '../../Components/Auth/Signout';
import OrdersHistory from '../../Components/OrdersHistory';
import AdminPage from '../AdminPage';
import { useEffect } from 'react';
import './index.scss';

const Cabinet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const user = useSelector((state) => state.user);
  const english = useSelector((state) => state.english);

  return (
    <div className="cabinet">
      <div className="orders">{user.admin ? <AdminPage /> : <OrdersHistory />}</div>
      <div className="personal-info">
        <ul className="personal-info__list">
          <li className="personal-info__item">{english ? 'Name:' : 'Имя:'} {user.firstname}</li>
          <li className="personal-info__item">E-mail: {user.email}</li>
          <li className="personal-info__item">
            <Signout />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cabinet;
