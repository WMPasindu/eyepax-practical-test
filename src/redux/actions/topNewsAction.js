export const SET_TOP_HEADLINES = 'SET_TOP_HEADLINES';
export const SET_ARTICLES = 'SET_ARTICLES';
export const SET_ARTICLES_COUNT = 'SET_ARTICLES_COUNT';

const setTopHeadLines = headLinesArray => dispatch => {
  dispatch({
    type: SET_TOP_HEADLINES,
    payload: headLinesArray,
  });
};

const setArticles = articlesArray => dispatch => {
  dispatch({
    type: SET_ARTICLES,
    payload: articlesArray,
  });
};

const setArticlesCount = articlesCount => dispatch => {
  dispatch({
    type: SET_ARTICLES_COUNT,
    payload: articlesCount,
  });
};

export {setTopHeadLines, setArticles, setArticlesCount};
