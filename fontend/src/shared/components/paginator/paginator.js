import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './paginator.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Paginator({ numberPage, currentPage, setCurrentPage }) {
  const [paginatorButtons, setPaginatorButtons] = useState([]);

  useEffect(() => {
    let paginatorButtonsTmp = [];
    for (let i = 0; i < numberPage; i++) paginatorButtonsTmp.push(i + 1);
    setPaginatorButtons(paginatorButtonsTmp);
  }, [numberPage]);

  const onPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const onNextPage = () => {
    if (currentPage < numberPage) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('paginator')}>
        <div
          className={currentPage === 1 ? cx('paginator-button-disabled') : cx('paginator-button')}
        >
          <FontAwesomeIcon icon={faCaretLeft} onClick={onPrevPage} />
        </div>
        {paginatorButtons &&
          paginatorButtons.length > 0 &&
          paginatorButtons.map((item, idx) => {
            if (item === currentPage)
              return (
                <div
                  key={idx}
                  className={cx('paginator-button-active')}
                  onClick={() => setCurrentPage(item)}
                >
                  {item}
                </div>
              );
            else
              return (
                <div
                  key={idx}
                  className={cx('paginator-button')}
                  onClick={() => setCurrentPage(item)}
                >
                  {item}
                </div>
              );
          })}
        <div
          className={
            currentPage === numberPage ? cx('paginator-button-disabled') : cx('paginator-button')
          }
        >
          <FontAwesomeIcon icon={faCaretRight} onClick={onNextPage} />
        </div>
      </div>
    </div>
  );
}

export default Paginator;
