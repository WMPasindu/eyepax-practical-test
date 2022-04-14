import {SET_LOGIN_STATE} from '../actions/loginActions';

const initialState = {
  isLoggedIn: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_STATE:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
}
