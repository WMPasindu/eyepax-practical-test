export const SET_ACTIVE = 'SET_ACTIVE';

const setActive = () => dispatch => {
  dispatch({
    type: SET_ACTIVE,
    payload: true,
  });
};

const setInactive = () => dispatch => {
  dispatch({
    type: SET_ACTIVE,
    payload: false,
  });
};

export {setActive, setInactive};
