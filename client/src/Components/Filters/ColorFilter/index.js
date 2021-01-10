import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { filterColor } from '../../../redux/actions/filterColor';

const ColorFilter = ({ status, setStatus }) => {
  const dispatch = useDispatch();
  const filterColorValue = useSelector((state) => state.filterColor);
  const english = useSelector(state => state.english);

  return (
    <div className="filters-list-div">
      <h3 className="filters-title mb-util">{english ? "Color" : "Цвет"}</h3>
      <ul className="filters-list__colors">
        <li className="filters-list__item-colors">
          <input
            type="radio"
            className="filter-checkbox-colors"
            id="red"
            name="color-choise"
            value="red"
            checked={status.red}
            onChange={() => { }}
            onClick={() =>
              setStatus({
                red: !status.red,
                orange: false,
                yellow: false,
                green: false,
                lightblue: false,
                blue: false,
                purple: false,
                whiteblack: false,
              })
            }
          />
          <label
            onClick={() =>
              filterColorValue === 'Красный'
                ? dispatch(filterColor(''))
                : dispatch(filterColor('Красный'))
            }
            className="filter-label-colors filter-label-colors--red"
            htmlFor="red"
          />
        </li>
        <li className="filters-list__item-colors">
          <input
            type="radio"
            className="filter-checkbox-colors"
            id="orange"
            name="color-choise"
            value="orange"
            checked={status.orange}
            onChange={() => { }}
            onClick={() =>
              setStatus({
                red: false,
                orange: !status.orange,
                yellow: false,
                green: false,
                lightblue: false,
                blue: false,
                purple: false,
                whiteblack: false,
              })
            }
          />
          <label
            onClick={() =>
              filterColorValue === 'Оранжевый'
                ? dispatch(filterColor(''))
                : dispatch(filterColor('Оранжевый'))
            }
            className="filter-label-colors filter-label-colors--orange"
            htmlFor="orange"
          />
        </li>
        <li className="filters-list__item-colors">
          <input
            type="radio"
            className="filter-checkbox-colors"
            id="yellow"
            name="color-choise"
            value="yellow"
            checked={status.yellow}
            onChange={() => { }}
            onClick={() =>
              setStatus({
                red: false,
                orange: false,
                yellow: !status.yellow,
                green: false,
                lightblue: false,
                blue: false,
                purple: false,
                whiteblack: false,
              })
            }
          />
          <label
            onClick={() =>
              filterColorValue === 'Желтый'
                ? dispatch(filterColor(''))
                : dispatch(filterColor('Желтый'))
            }
            className="filter-label-colors filter-label-colors--yellow"
            htmlFor="yellow"
          />
        </li>
        <li className="filters-list__item-colors">
          <input
            type="radio"
            className="filter-checkbox-colors"
            id="green"
            name="color-choise"
            value="green"
            checked={status.green}
            onChange={() => { }}
            onClick={() =>
              setStatus({
                red: false,
                orange: false,
                yellow: false,
                green: !status.green,
                lightblue: false,
                blue: false,
                purple: false,
                whiteblack: false,
              })
            }
          />
          <label
            onClick={() =>
              filterColorValue === 'Зеленый'
                ? dispatch(filterColor(''))
                : dispatch(filterColor('Зеленый'))
            }
            className="filter-label-colors filter-label-colors--green"
            htmlFor="green"
          />
        </li>
        <li className="filters-list__item-colors">
          <input
            type="radio"
            className="filter-checkbox-colors"
            id="lightblue"
            name="color-choise"
            value="lightblue"
            checked={status.lightblue}
            onChange={() => { }}
            onClick={() =>
              setStatus({
                red: false,
                orange: false,
                yellow: false,
                green: false,
                lightblue: !status.lightblue,
                blue: false,
                purple: false,
                whiteblack: false,
              })
            }
          />
          <label
            onClick={() =>
              filterColorValue === 'Голубой'
                ? dispatch(filterColor(''))
                : dispatch(filterColor('Голубой'))
            }
            className="filter-label-colors filter-label-colors--light-blue"
            htmlFor="lightblue"
          />
        </li>
        <li className="filters-list__item-colors">
          <input
            type="radio"
            className="filter-checkbox-colors"
            id="blue"
            name="color-choise"
            value="blue"
            checked={status.blue}
            onChange={() => { }}
            onClick={() =>
              setStatus({
                red: false,
                orange: false,
                yellow: false,
                green: false,
                lightblue: false,
                blue: !status.blue,
                purple: false,
                whiteblack: false,
              })
            }
          />
          <label
            onClick={() =>
              filterColorValue === 'Синий'
                ? dispatch(filterColor(''))
                : dispatch(filterColor('Синий'))
            }
            className="filter-label-colors filter-label-colors--blue"
            htmlFor="blue"
          />
        </li>
        <li className="filters-list__item-colors">
          <input
            type="radio"
            className="filter-checkbox-colors"
            id="purple"
            name="color-choise"
            value="purple"
            checked={status.purple}
            onChange={() => { }}
            onClick={() =>
              setStatus({
                red: false,
                orange: false,
                yellow: false,
                green: false,
                lightblue: false,
                blue: false,
                purple: !status.purple,
                whiteblack: false,
              })
            }
          />
          <label
            onClick={() =>
              filterColorValue === 'Фиолетовый'
                ? dispatch(filterColor(''))
                : dispatch(filterColor('Фиолетовый'))
            }
            className="filter-label-colors filter-label-colors--purple"
            htmlFor="purple"
          />
        </li>
        <li className="filters-list__item-colors">
          <input
            type="radio"
            className="filter-checkbox-colors"
            id="whiteblack"
            name="color-choise"
            value="whiteblack"
            checked={status.whiteblack}
            onChange={() => { }}
            onClick={() =>
              setStatus({
                red: false,
                orange: false,
                yellow: false,
                green: false,
                lightblue: false,
                blue: false,
                purple: false,
                whiteblack: !status.whiteblack,
              })
            }
          />
          <label
            onClick={() =>
              filterColorValue === 'Черно-белый'
                ? dispatch(filterColor(''))
                : dispatch(filterColor('Черно-белый'))
            }
            className="filter-label-colors filter-label-colors--whiteblack"
            htmlFor="whiteblack"
          />
        </li>
      </ul>
    </div>
  );
};

export default ColorFilter;
