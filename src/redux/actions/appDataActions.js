import {get, post} from '../../config/baseAPI';
import {API_KEY} from '../../config/config';
import {setActive, setInactive} from './activityAction';
import {setArticles, setArticlesCount, setTopHeadLines} from './topNewsAction';

export const SET_DASHBOARD_ITEMS = 'SET_DASHBOARD_ITEMS';

const setDashboard = () => dispatch => {
  dispatch({
    type: SET_DASHBOARD_ITEMS,
    payload: true,
  });
};

const getDataToDashboad = (sortBy, date) => async dispatch => {
  const endpoint =
    'everything?q=Apple&from=' +
    date +
    '&sortBy=' +
    sortBy +
    '&apiKey=' +
    API_KEY;
  dispatch(setActive());

  console.log(endpoint);
  try {
    const response = await get({
      endpoint,
    });
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      if (data.status === 'ok') {
        dispatch(setInactive());
        dispatch(setArticles(data.articles));
        dispatch(setArticlesCount(data.totalResults));
      } else {
        dispatch(setInactive());
      }
    }
  } catch (error) {
    dispatch(setInactive());
  }
  dispatch(setInactive());
};

const getTopHeadLines = (type, value) => async dispatch => {
  const endpoint = 'top-headlines?' + type + '=' + value + '&apiKey=' + API_KEY;
  dispatch(setActive());

  try {
    const response = await get({
      endpoint,
    });
    if (response.ok) {
      const data = await response.json();
      if (data.status === 'ok') {
        dispatch(setInactive());
        dispatch(setTopHeadLines(data.articles));
      } else {
        dispatch(setInactive());
      }
    }
  } catch (error) {
    dispatch(setInactive());
  }
  dispatch(setInactive());
};

export {setDashboard, getTopHeadLines, getDataToDashboad};
