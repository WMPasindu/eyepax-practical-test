import {
  SET_TOP_HEADLINES,
  SET_ARTICLES,
  SET_ARTICLES_COUNT,
} from '../actions/topNewsAction';

const initialState = {
  headLinesArray: [],
  articles: [],
  articlesCount: 0,
};

export default function topNewsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOP_HEADLINES:
      return {
        ...state,
        headLinesArray: action.payload,
      };
    case SET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case SET_ARTICLES_COUNT:
      return {
        ...state,
        articlesCount: action.payload,
      };
    default:
      return state;
  }
}
