import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_USER } from '../../../redux/types/user';
import * as AC from '../../../redux/actions/authForm';
import './index.scss';

function Signout() {
  const history = useHistory();

  const dispatch = useDispatch();
  const english = useSelector((state) => state.english);

  const signOut = async () => {
    const response = await fetch('http://localhost:5000/api/v1/auth/signout', {
      credentials: 'include',
    });

    if (response.status === 200) {
      dispatch({
        type: DELETE_USER,
      });
      dispatch(AC.closeAuthForm());
      history.push('/');
    }
  };

  return (
    <div className="signOutButtonArea">
      <button className="signOutButtonArea__button" onClick={signOut}>
        {english ? "logout" : "выйти из аккаунта"}
      </button>
    </div>
  );
}

export default Signout;
