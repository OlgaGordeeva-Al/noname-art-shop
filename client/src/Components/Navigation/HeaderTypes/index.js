import './index.scss';
import { NavLink, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategory } from '../../../redux/actions/filterCategory';
import iconSet from '../HeaderMain/selection.json';
import IcomoonReact from 'icomoon-react';
import Search from '../HeaderMain/Search';

const HeaderTypes = () => {
  const dispatch = useDispatch();
  const english = useSelector((state) => state.english);

  return (
    <>
      <ul className="header-types">
        <input
          type="checkbox"
          name="show-types"
          id="show-types"
          className="show-types-menu"
        />
        <label className="show-types-label" htmlFor="show-types">
          <IcomoonReact iconSet={iconSet} className="menu2" icon="menu2" />
        </label>
        <li className="header-types__li">
          <NavLink
            activeClassName="selected"
            className="header-types__item header-types__item--artists types-link"
            to="/artists"
          >
            {english ? 'Artists' : 'Художники'}
          </NavLink>
        </li>
        <li className="header-types__li">
          <NavLink
            onClick={() => dispatch(filterCategory('Графика'))}
            activeClassName="selected"
            className="header-types__item types-link"
            to="/items/graphic"
          >
            {english ? 'Graphic arts' : 'Графика'}
          </NavLink>
        </li>
        <li className="header-types__li">
          <NavLink
            onClick={() => dispatch(filterCategory('Живопись'))}
            activeClassName="selected"
            className="header-types__item types-link"
            to="/items/painting"
          >
            {english ? 'Painting' : 'Живопись'}
          </NavLink>
        </li>
        <li className="header-types__li">
          <NavLink
            onClick={() => dispatch(filterCategory('Инсталляция'))}
            activeClassName="selected"
            className="header-types__item types-link"
            to="/items/installation"
          >
            {english ? 'Installation' : 'Инсталляция'}
          </NavLink>
        </li>
        <li className="header-types__li">
          <NavLink
            onClick={() => dispatch(filterCategory('Коллаж'))}
            activeClassName="selected"
            className="header-types__item types-link"
            to="/items/collage"
          >
            {english ? 'Collage' : 'Коллаж'}
          </NavLink>
        </li>
        <li className="header-types__li">
          <NavLink
            onClick={() => dispatch(filterCategory('Скульптура'))}
            activeClassName="selected"
            className="header-types__item types-link"
            to="/items/sculpture"
          >
            {english ? 'Sculpture' : 'Скульптура'}
          </NavLink>
        </li>
        <li className="header-types__li">
          <NavLink
            onClick={() => dispatch(filterCategory('Текстиль'))}
            activeClassName="selected"
            className="header-types__item types-link"
            to="/items/textile"
          >
            {english ? 'Textile' : 'Текстиль'}
          </NavLink>
        </li>
        <li className="header-types__li">
          <NavLink
            onClick={() => dispatch(filterCategory('Тиражные работы'))}
            activeClassName="selected"
            className="header-types__item types-link"
            to="/items/circulation"
          >
            {english ? 'Circulation works' : 'Тиражные работы'}
          </NavLink>
        </li>
        <li className="header-types__li">
          <NavLink
            onClick={() => dispatch(filterCategory('Фотография'))}
            activeClassName="selected"
            className="header-types__item types-link"
            to="/items/photo"
          >
            {english ? 'Photography' : 'Фотография'}
          </NavLink>
        </li>
        <li className="header-main__search">
          <Switch>
            <Route path={'/basket'}>{null}</Route>
            <Route path={'/cabinet'}>{null}</Route>
            <Route exact path={'/artists'}>
              {null}
            </Route>
            <Search />
          </Switch>
        </li>
      </ul>
    </>
  );
};

export default HeaderTypes;
