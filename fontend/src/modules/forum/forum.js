import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '@components/spinner/spinner';
import { loadPost } from '~/redux/post/post.thunk';

function Forum() {
  const postState = useSelector((state) => state.post);
  const { loading, post, error } = postState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPost());
  }, []);

  return (
    <>
      <div>
        <h2 className="py-4">Post</h2>
        {loading && <Spinner />}
        {error && <h3>Error</h3>}
        {post &&
          post.posts &&
          post.posts.length > 0 &&
          post.posts.map((item) => (
            <div key={item.id} className="text-start my-4">
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Forum;
