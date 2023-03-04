import { FETCH_POST_REQUEST, FETCH_POST_FAILURE, FETCH_POST_SUCCESS } from './post.type';

const initialState = {
  loading: false,
  post: [],
  error: '',
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
        post: null,
        error: null,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
        error: null,
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        post: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
