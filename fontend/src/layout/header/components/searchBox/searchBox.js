import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './searchBox.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function SearchBox() {
  const inputRef = useRef();
  const navigate = useNavigate();
  const onSearch = () => {
    navigate(`products/search/${inputRef.current.value}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onSearch();
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrap-input')}>
        <input
          ref={inputRef}
          className={cx('search-input')}
          placeholder="Nhập mã sản phẩm hoặc tên sản phẩm để tìm kiếm..."
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>

      <button className={cx('search-btn')} onClick={() => onSearch()}>
        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default SearchBox;
