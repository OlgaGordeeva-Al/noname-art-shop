import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import iconSet from '../selection.json';
import IcomoonReact from 'icomoon-react';
import { filterProducts } from '../../../../redux/actions/filterText';

const Search = () => {
  const searchText = useSelector((state) => state.filterText);
  const dispatch = useDispatch();
  const english = useSelector(state => state.english)

  const searchHandler = (value) => {
    dispatch(filterProducts(value));
  };
  return (
    <div className="search">
      <input
        value={searchText}
        onChange={(e) => searchHandler(e.target.value)}
        name="title"
        type="text"
        className="search__input"
        placeholder={english ? "Find artwork" : "Найти работы художников"}
      />
      <button className="search__button">
        <IcomoonReact iconSet={iconSet} className="search__icon" icon="search" />
      </button>
    </div>
  );
};

export default Search;
