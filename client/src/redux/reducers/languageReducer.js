import * as TYPES from '../types/language';

function languageReducer(english = false, action) {
  switch (action.type) {
    case TYPES.CHANGE_LANGUAGE:
      return !english;

    default:
      return english;
  }
}

export default languageReducer;
