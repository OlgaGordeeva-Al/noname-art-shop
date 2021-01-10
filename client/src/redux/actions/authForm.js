import * as TYPES from '../types/authForm';

export const showAuthForm = () => ({
  type: TYPES.SHOW_AUTH_FORM,
  payload: true
});

export const closeAuthForm = () => ({
  type: TYPES.SHOW_AUTH_FORM,
  payload: false
});
