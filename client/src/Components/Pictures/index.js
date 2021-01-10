import './index.scss';
import PictureItem from './PictureItem';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { filterProducts } from '../../redux/actions/filterText';
import { filterSize } from '../../redux/actions/filterSize';
import { filterPrice } from '../../redux/actions/filterPrice';
import { filterColor } from '../../redux/actions/filterColor';
import { useDispatch } from 'react-redux';

const Pictures = () => {
  const dispatch = useDispatch();
  const english = useSelector(state => state.english);

  const products = useSelector((state) => state.products);
  const filterTextValue = useSelector((state) => state.filterText).toLowerCase();
  const filterCategoryValue = useSelector((state) => state.filterCategory);
  const filterColorValue = useSelector((state) => state.filterColor);
  const filterSizeValue = useSelector((state) => state.filterSize);
  const filterPriceValue = useSelector((state) => state.filterPrice);

  const productsFiltered = products
    .filter((el) => el.name.toLowerCase().match(filterTextValue))
    .filter((el) => el.type.match(filterCategoryValue))
    .filter((el) => el.color.match(filterColorValue))
    .filter((el) => el.sizeFilter.match(filterSizeValue))
    .filter((el) => (filterPriceValue + 1 ? el.price < filterPriceValue : true));

  useEffect(() => {
    dispatch(filterProducts(''));
    dispatch(filterColor(''));
    dispatch(filterSize(''));
    dispatch(filterPrice(-1));
  }, [dispatch, filterCategoryValue]);

  return (
    <>
      {productsFiltered.length ? (
        <ul className="content-items">
          {productsFiltered.map((el) => (
            <PictureItem
              id={el._id}
              img={el.picture}
              author={el.authorName}
              name={el.name}
              price={el.price}
              key={el._id}
            />
          ))}
        </ul>
      ) : (
          <div className="no-products">
            <span className="no-products__text">
              {english ? "There are no results for this search" : "Пока нет работ, соответствующих выбранным фильтрам"}
            </span>
          </div>
        )}
    </>
  );
};

export default Pictures;
