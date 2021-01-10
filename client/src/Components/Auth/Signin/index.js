import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_USER } from '../../../redux/types/user';
import * as AC from '../../../redux/actions/authForm';
import './index.scss';

function Signin() {
  const history = useHistory();
  const [allert, setAllert] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const english = useSelector((state) => state.english);

  const dispatch = useDispatch();

  const signIn = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/api/v1/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: pass }),
      credentials: 'include',
    });
    setEmail('');
    setPass('');
    const result = await response.json();
    const responseBasket = await fetch(
      `http://localhost:5000/basket/api/v1/${result.id}`
    );
    const resultBasket = await responseBasket.json();

    if (result.id) {
      dispatch({
        type: ADD_USER,
        payload: {
          id: result.id,
          firstname: result.firstname,
          email: result.email,
          favourites: result.favourites,
          admin: result.admin,
          basket: resultBasket.goods ? resultBasket.goods.map((el) => el._id) : [],
        },
      });

      dispatch(AC.closeAuthForm());
      history.push('/');
    } else if (result.message) {
      setAllert(result.message);
    }
  };

  return (
    <>
      <form className="signInForm">
        <div className="signInForm__allertText">{allert}</div>
        <div className="signInForm__inputArea">
          <input
            type="email"
            name="email"
            className="signInForm__inputText"
            placeholder=" Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signInForm__inputArea">
          <input
            type="password"
            name="password"
            className="signInForm__inputText"
            placeholder={english ? " Password" : " Пароль"}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <button type="submit" className="signInForm__signInButton" onClick={signIn}>
          {english ? "login" : "войти в аккаунт"}
        </button>
      </form>
    </>
  );
}

export default Signin;
