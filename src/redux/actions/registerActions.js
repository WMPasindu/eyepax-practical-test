import {storeUserData} from '../../services/asyncStorage';

export const SET_REGISTER_STATUS = 'SET_REGISTER_STATUS';

const setRegisterStatusSucess = () => async dispatch => {
  dispatch({
    type: SET_REGISTER_STATUS,
    payload: true,
  });
};

const setRegisterStatusUnsucess = () => async dispatch => {
  dispatch({
    type: SET_REGISTER_STATUS,
    payload: false,
  });
};

const register =
  ({username, password}) =>
  async dispatch => {
    const userData = {
      userName: username,
      password: password,
    };
    try {
      await storeUserData(userData);
      dispatch(setRegisterStatusSucess());
    } catch (error) {
      dispatch(setRegisterStatusUnsucess());
    }
  };

export {setRegisterStatusSucess, setRegisterStatusUnsucess, register};
