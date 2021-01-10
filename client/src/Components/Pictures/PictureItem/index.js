import './index.scss';
import iconSet from '../../Navigation/HeaderMain/selection.json';
import IcomoonReact from 'icomoon-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { favHandlerThunk } from '../../../redux/actions/user';
import * as AC from '../../../redux/actions/authForm';
import AdminButtons from '../../Admin/ManageSite/AdminButtons'

const PictureItem = (props) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user?.id);
  const favourites = useSelector((state) => state.user?.favourites);
  const flag = favourites.findIndex((el) => el === props.id) + 1;
  const admin = useSelector((state) => state.user?.admin);
  const english = useSelector(state => state.english);

  const clickHandler = (e) => {
    e.preventDefault();
    if (userId) {
      dispatch(favHandlerThunk(userId, props.id));
    } else {
      dispatch(AC.showAuthForm(true));
    }
  };

  return (
    <li key={props.id} className="pictures-container__item">
      <div className="picture-and-like">
        <Link to={`/item/${props.id}`}>
          <img className="pictures-container__img" src={props.img} alt="img" />
        </Link>
        <IcomoonReact
          onClick={clickHandler}
          fill="#AAB8C2"
          iconSet={iconSet}
          className="user-nav__icon like-btn"
          icon={flag ? 'star-full' : 'star-empty'}
        />
      </div>
      <div className="picture-desc">
        <span className="pictures-container__text">{english ? "Title:" : "Название:"} {props.name}</span>
        <span className="pictures-container__text">{english ? "Author:" : "Автор:"} {props.author}</span>
        <span className="pictures-container__text">{english ? "Price:" : "Цена:"} {props.price} {english ? "rub." : "руб."}</span>
      </div>
      { admin? 
      <AdminButtons id={props.id}/>
      : null}
    </li>
  );
};

export default PictureItem;
