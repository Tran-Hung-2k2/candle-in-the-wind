import React from 'react';
import style from './not-found.module.scss';

function NotFound() {
  return (
    <div className={`${style.notFoundPage}`}>
      <div className={`${style.content}`}>
        <h4>404</h4>
        <p>Page not found</p>
      </div>
    </div>
  );
}

export default NotFound;
