import IcomoonReact from 'icomoon-react';
import iconSet from './closeIcon.json';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Signin from '../../Components/Auth/Signin';
import Signup from '../../Components/Auth/Signup';
import * as AC from '../../redux/actions/authForm';
import './index.scss';

const MODAL_STYLES = {
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '15px',
  zIndex: 1000,
  width: '50rem',
  maxWidth: '96%',
  borderRadius: '3px',
};

const OVERLAY = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

export default function Auth() {
  const [newUser, setNewUser] = useState(false);

  const dispatch = useDispatch();
  const open = useSelector((state) => state.authForm);
  const english = useSelector((state) => state.english);

  const closeAuthFormFromOverrlay = (e) => {
    if (e.target.id === 'overlay') dispatch(AC.closeAuthForm(), setNewUser(false));
  };

  if (!open) return null;

  return (
    <>
      <div style={OVERLAY} id="overlay" onClick={closeAuthFormFromOverrlay}>
        <div style={MODAL_STYLES}>
          <div className="closeIcon">
            <IcomoonReact
              iconSet={iconSet}
              className="closeIcon__icon"
              onClick={() => (dispatch(AC.closeAuthForm()), setNewUser(false))}
              icon="cross"
            />
          </div>

          <div className="authNav">
            <div className="authNav__title">
              <input
                type="radio"
                className="auth-checkbox"
                id="signInCheck"
                name="checkAuth"
                value={english ? "Login" : "Войти в аккаунт"}
                defaultChecked="true"
              />
              <label
                onClick={() => setNewUser(false)}
                className="auth-label"
                htmlFor="signInCheck"
              >
                {english ? "Login" : "Войти в аккаунт"}
              </label>
            </div>

            <div className="authNav__title">
              <input
                type="radio"
                className="auth-checkbox"
                id="signUpCheck"
                name="checkAuth"
                value={english ? "Create account" : "Создать аккаунт"}
              />
              <label
                onClick={() => setNewUser(true)}
                className="auth-label"
                htmlFor="signUpCheck"
              >
                {english ? "Create account" : "Создать аккаунт"}
              </label>
            </div>
          </div>

          {newUser ? <Signup func={setNewUser} /> : <Signin />}
        </div>
      </div>
    </>
  );
}
