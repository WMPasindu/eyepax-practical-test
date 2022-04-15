import {SET_REGISTER_STATUS} from '../actions/registerActions';

const initialState = {
  isRegistrationSucess: false,
};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_REGISTER_STATUS:
      return {
        ...state,
        isRegistrationSucess: action.payload,
      };
    default:
      return state;
  }
}
