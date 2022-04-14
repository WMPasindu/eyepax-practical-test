import {SET_DASHBOARD_ITEMS} from '../actions/appDataActions';

const initialState = {
  isDashboardDataFetch: false,
};

export default function appDataReducer(state = initialState, actions) {
  switch (actions.type) {
    case SET_DASHBOARD_ITEMS:
      return {
        ...state,
        isDashboardDataFetch: actions.payload,
      };
    default:
      return state;
  }
}
