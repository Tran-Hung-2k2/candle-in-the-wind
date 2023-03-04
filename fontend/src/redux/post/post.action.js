import { FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from './post.type';

const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

const fetchPostSuccess = (product) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: product,
  };
};

const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};

export { fetchPostRequest, fetchPostSuccess, fetchPostFailure };
