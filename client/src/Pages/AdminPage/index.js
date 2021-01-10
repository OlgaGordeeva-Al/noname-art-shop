//import './index.scss';
import { Link } from 'react-router-dom';
import ManageOrders from '../../Components/Admin/ManageOrders';
import { useEffect } from 'react';
import ManageSite from '../../Components/Admin/ManageSite';
import { useSelector } from 'react-redux';

function AdminPage() {
  const english = useSelector((state) => state.english);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>{english ? 'I want:' : 'Я хочу:'}</div>
      <ManageOrders />
      <ManageSite />
      {/* вынести в компонент */}
      <Link to="/stats">
        <button>{english ? 'Statistics' : 'Статистика'}</button>
      </Link>
    </div>
  );
}

export default AdminPage;
