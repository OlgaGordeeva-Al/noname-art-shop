import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_USER } from '../../../redux/types/user';
import * as AC from '../../../redux/actions/authForm';
import './index.scss';

function Signup({ func }) {
  const history = useHistory();
  const [allert, setAllert] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const english = useSelector((state) => state.english);

  const dispatch = useDispatch();

  const signUp = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstname: name, email: email, password: pass }),
      credentials: 'include',
    });
    setName('');
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
          basket: resultBasket.goods ? resultBasket.goods.map((el) => el._id) : [],
        },
      });
      history.push('/');
      func(false);
      dispatch(AC.closeAuthForm());
    } else if (result.message) {
      setAllert(result.message);
    }
  };

  return (
    <>
      <form className="signUpForm">
        <div className="signUpForm__allertText">{allert}</div>
        <div className="signUpForm__inputArea">
          <input
            type="name"
            name="username"
            className="signUpForm__inputText"
            placeholder={english ? " Name" : " Ваше имя"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="signUpForm__inputArea">
          <input
            type="email"
            name="email"
            className="signUpForm__inputText"
            placeholder=" Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="signUpForm__inputArea">
          <input
            type="password"
            name="password"
            className="signUpForm__inputText"
            placeholder={english ? " Password" : " Пароль"}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>

        <button className="signUpForm__signUpButton" type="submit" onClick={signUp}>
          {english ? "sign up" : "зарегистрироваться"}
        </button>

        <div className="signUpForm__attentionList">
          {english ? "By registering, you agree to the Terms of Use and Cookie Policy." : "При регистрации вы соглашаетесь со всеми пунктами документов «Условия пользования» и «Политика использования cookie-файлов»."}
        </div>
      </form>
    </>
  );
}

export default Signup;
