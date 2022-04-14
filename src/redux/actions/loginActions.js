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

export {setLoginActive, setLoginInActive};
