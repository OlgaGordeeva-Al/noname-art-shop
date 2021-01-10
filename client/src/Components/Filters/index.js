import './index.scss';
import ColorFilter from './ColorFilter';
import PriceFilter from './PriceFilter';
import SizeFilter from './SizeFilter';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterSize } from '../../redux/actions/filterSize';
import { filterPrice } from '../../redux/actions/filterPrice';
import { filterColor } from '../../redux/actions/filterColor';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Filters = () => {
  const dispatch = useDispatch();
  const url = useParams();
  const english = useSelector(state => state.english);

  useEffect(() => {
    setSizeStatus({
      small: false,
      medium: false,
      big: false,
    });

    setColorStatus({
      red: false,
      orange: false,
      yellow: false,
      green: false,
      lightblue: false,
      blue: false,
      purple: false,
      whiteblack: false,
    });

    setPriceStatus({
      price30: false,
      price10: false,
      price50: false,
    });
  }, [url]);

  const clickHandler = () => {
    dispatch(filterColor(''));
    dispatch(filterSize(''));
    dispatch(filterPrice(-1));

    setSizeStatus({
      small: false,
      medium: false,
      big: false,
    });

    setColorStatus({
      red: false,
      orange: false,
      yellow: false,
      green: false,
      lightblue: false,
      blue: false,
      purple: false,
      whiteblack: false,
    });

    setPriceStatus({
      price30: false,
      price10: false,
      price50: false,
    });
  };

  const [sizeStatus, setSizeStatus] = useState({
    small: false,
    medium: false,
    big: false,
  });

  const [colorStatus, setColorStatus] = useState({
    red: false,
    orange: false,
    yellow: false,
    green: false,
    lightblue: false,
    blue: false,
    purple: false,
    whiteblack: false,
  });

  const [priceStatus, setPriceStatus] = useState({
    price30: false,
    price10: false,
    price50: false,
  });

  return (
    <div className="filters-area">
      <div>
        <h3 onClick={clickHandler} className="filters-title clear-filter">
          {english ? "Clear" : "Сбросить фильтр"}
        </h3>
      </div>
      <ColorFilter status={colorStatus} setStatus={setColorStatus} />
      <PriceFilter status={priceStatus} setStatus={setPriceStatus} />
      <SizeFilter status={sizeStatus} setStatus={setSizeStatus} />
    </div>
  );
};

export default Filters;
