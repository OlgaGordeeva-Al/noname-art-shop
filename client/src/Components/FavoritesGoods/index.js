import { useSelector, useDispatch } from 'react-redux';
import PictureItem from '../../Components/Pictures/PictureItem';
import { getFavsForUserThunk } from '../../redux/actions/favorites';
import { useEffect } from 'react';
import './index.scss';

const FavoritesGoods = () => {
  const user = useSelector((state) => state.user);
  const filterTextValue = useSelector((state) => state.filterText);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavsForUserThunk(user.id));
  }, [dispatch, user.id, user.favourites]);

  const favorites = useSelector((state) => state.favorites);
  const english = useSelector(state => state.english);

  return (
    <ul className="content-items">
      {favorites.length ? (
        favorites
          .filter((el) => el.name.toLowerCase().match(filterTextValue))
          .map((el) => (
            <PictureItem
              id={el._id}
              img={el.picture}
              author={el.authorName}
              name={el.name}
              price={el.price}
              key={el._id}
            />
          ))
      ) : (
          <li className="no-items-fav">
            <span className="no-items-cart__fav">{english ? "Favourites list is empty" : "В избранном нет работ"}</span>
          </li>
        )}
    </ul>
  );
};

export default FavoritesGoods;
