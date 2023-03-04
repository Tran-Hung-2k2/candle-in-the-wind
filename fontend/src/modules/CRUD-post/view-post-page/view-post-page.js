import React from 'react';
import { useNavigate } from 'react-router-dom';

function ViewPostPage() {
  const navigate = useNavigate();

  const onCreatePost = () => {
    navigate('/admin/post/create');
  };
  return (
    <>
      <div className="flex justify-end">
        <button className="create-button" onClick={onCreatePost}>
          Đăng bài viết
        </button>
      </div>
      <div>ViewPostPage</div>
    </>
  );
}

export default ViewPostPage;
