import FavoritesGoods from '../../Components/FavoritesGoods';
import { useEffect } from 'react';
import './index.scss';

const Favorites = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="favorites-page">
      <FavoritesGoods />
    </div>
  );
};

export default Favorites;
