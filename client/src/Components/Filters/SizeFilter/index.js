import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { filterSize } from '../../../redux/actions/filterSize';

const SizeFilter = ({ status, setStatus }) => {
  const dispatch = useDispatch();
  const filterSizeValue = useSelector((state) => state.filterSize);
  const english = useSelector(state => state.english);

  return (
    <div className="filters-list-div size-filter">
      <ul className="filters-list">
        <li className="filters-list__item">
          <h3 className="filters-title">{english ? "Size" : "Размер"}</h3>
        </li>
        <li className="filters-list__item">
          <input
            type="radio"
            className="filter-checkbox"
            id="small"
            name="size-choise"
            value="small"
            checked={status.small}
            onChange={() => { }}
            onClick={() => setStatus({ small: !status.small, medium: false, big: false })}
          />
          <label
            onClick={() =>
              filterSizeValue ? dispatch(filterSize('')) : dispatch(filterSize(1))
            }
            className="filter-label"
            htmlFor="small"
          >
            {english ? "Small" : "Маленький"}<span className="filter-label__text">{english ? "(under 40 sm)" : "(до 40 см)"}</span>
          </label>
        </li>
        <li className="filters-list__item">
          <input
            type="radio"
            className="filter-checkbox"
            id="medium"
            name="size-choise"
            value="medium"
            checked={status.medium}
            onChange={() => { }}
            onClick={() =>
              setStatus({ small: false, medium: !status.medium, big: false })
            }
          />
          <label
            onClick={() =>
              filterSizeValue ? dispatch(filterSize('')) : dispatch(filterSize(2))
            }
            className="filter-label"
            htmlFor="medium"
          >
            {english ? "Medium" : "Средний"} <span className="filter-label__text">{english ? "(40 - 100 sm)" : "(40 - 100 см)"}</span>
          </label>
        </li>
        <li className="filters-list__item">
          <input
            type="radio"
            className="filter-checkbox"
            id="big"
            name="size-choise"
            value="big"
            checked={status.big}
            onChange={() => { }}
            onClick={() => setStatus({ small: false, medium: false, big: !status.big })}
          />
          <label
            onClick={() =>
              filterSizeValue ? dispatch(filterSize('')) : dispatch(filterSize(3))
            }
            className="filter-label"
            htmlFor="big"
          >
            {english ? "Big" : "Большой"} <span className="filter-label__text">{english ? "(more than 100 sm)" : "(больше 100 см)"}</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default SizeFilter;
