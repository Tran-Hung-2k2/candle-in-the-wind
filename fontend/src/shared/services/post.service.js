import appClient from '@utils/appClient';

class PostService {
  getAllPost = () => {
    return appClient().get('posts');
  };
}

export default new PostService();
