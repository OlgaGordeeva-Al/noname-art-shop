import './index.scss';
import banner from './banner.png';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterCategory } from '../../../../redux/actions/filterCategory';

const Banners = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCategory(''));
  }, [dispatch]);

  return (
    <div className="banners-container">
      <img className="banner" src={banner} alt="banner" name="top" />
    </div>
  );
};

export default Banners;
