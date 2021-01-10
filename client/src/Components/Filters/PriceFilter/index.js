import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { filterPrice } from '../../../redux/actions/filterPrice';

const PriceFilter = ({ status, setStatus }) => {
  const dispatch = useDispatch();
  const filterPriceValue = useSelector((state) => state.filterPrice);
  const english = useSelector(state => state.english);

  return (
    <div className="filters-list-div">
      <ul className="filters-list">
        <li className="filters-list__item">
          <h3 className="filters-title">{english ? "Price" : "Цена"}</h3>
        </li>
        <li className="filters-list__item">
          <input
            type="radio"
            className="filter-checkbox"
            id="rub10k"
            name="price-choise"
            value="rub10k"
            checked={status.price10}
            onChange={() => { }}
            onClick={() =>
              setStatus({ price10: !status.price10, price30: false, price50: false })
            }
          />
          <label
            onClick={() =>
              filterPriceValue === -1
                ? dispatch(filterPrice(10000))
                : dispatch(filterPrice(-1))
            }
            className="filter-label"
            htmlFor="rub10k"
          >
            {english ? "Under 10 000" : "До 10 000"} &#x20bd;
          </label>
        </li>
        <li className="filters-list__item">
          <input
            type="radio"
            className="filter-checkbox"
            id="rub30k"
            name="price-choise"
            value="rub30k"
            checked={status.price30}
            onChange={() => { }}
            onClick={() =>
              setStatus({ price30: !status.price30, price10: false, price50: false })
            }
          />
          <label
            onClick={() =>
              filterPriceValue === -1
                ? dispatch(filterPrice(30000))
                : dispatch(filterPrice(-1))
            }
            className="filter-label"
            htmlFor="rub30k"
          >
            {english ? "Under 30 000" : "До 30 000"} &#x20bd;
          </label>
        </li>
        <li className="filters-list__item">
          <input
            type="radio"
            className="filter-checkbox"
            id="rub50k"
            name="price-choise"
            value="rub50k"
            checked={status.price50}
            onChange={() => { }}
            onClick={() =>
              setStatus({ price50: !status.price50, price10: false, price30: false })
            }
          />
          <label
            onClick={() =>
              filterPriceValue === -1
                ? dispatch(filterPrice(50000))
                : dispatch(filterPrice(-1))
            }
            className="filter-label"
            htmlFor="rub50k"
          >
            {english ? "Under 50 000" : "До 50 000"} &#x20bd;
          </label>
        </li>
      </ul>
    </div>
  );
};

export default PriceFilter;
