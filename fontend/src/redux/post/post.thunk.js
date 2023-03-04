import { fetchPostFailure, fetchPostRequest, fetchPostSuccess } from './post.action';
import PostService from '~/shared/services/post.service';

const loadPost = () => {
  return function (dispatch) {
    dispatch(fetchPostRequest());
    PostService.getAllPost()
      .then((response) => dispatch(fetchPostSuccess(response.data)))
      .catch((error) => dispatch(fetchPostFailure(error)));
  };
};

export { loadPost };
