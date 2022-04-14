import {getUserData} from '../../services/asyncStorage';

export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';

const setLoginActive = () => async dispatch => {
  dispatch({
    type: SET_LOGIN_STATE,
    payload: true,
  });
};

const setLoginInActive = () => async dispatch => {
  dispatch({
    type: SET_LOGIN_STATE,
    payload: false,
  });
};

const login =
  ({username, password}) =>
  async dispatch => {
    const userData = await getUserData();
    if (userData) {
      console.log(userData.userName);
      if (userData.userName === username && userData.password === password) {
        dispatch(setLoginActive());
      } else {
        dispatch(setLoginInActive());
      }
    }
  };

export {setLoginActive, setLoginInActive, login};
