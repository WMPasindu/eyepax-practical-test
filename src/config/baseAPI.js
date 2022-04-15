import {API_KEY, BASE_URL} from './config';

const post = ({endpoint, data, authRequired = true}) => {
  let headers = new Headers();
  if (authRequired) headers.append('apiKey', API_KEY);
  headers.append('Content-Type', 'application/json');

  return fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });
};

const get = ({endpoint}) => {
  return fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
  });
};

export {post, get};
