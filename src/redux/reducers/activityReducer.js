import {SET_ACTIVE} from '../actions/activityAction';

const initialState = {
  activity: false,
};

export default function activityReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE:
      return {
        ...state,
        activity: action.payload,
      };
    default:
      return state;
  }
}
