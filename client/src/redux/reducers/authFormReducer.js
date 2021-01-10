import * as TYPES from '../types/authForm'

const authFormReducer = (authForm = false, action) => {
  switch (action.type) {

    case TYPES.SHOW_AUTH_FORM:
      return action.payload;

    case TYPES.CLOSE_AUTH_FORM:
      return action.payload;

    default:
      return authForm;
  }
}

export default authFormReducer;
