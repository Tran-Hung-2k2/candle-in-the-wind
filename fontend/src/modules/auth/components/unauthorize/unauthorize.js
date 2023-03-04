import React from 'react';
import style from './unauthorize.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ADMIN_ROLE } from '~/shared/constants/role';

const cx = classNames.bind(style);

function Unauthorize() {
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.userProfile);

  const onBack = () => {
    if (role === ADMIN_ROLE) navigate('/admin');
    else navigate('/');
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <h4>401</h4>
        <p>Unauthorize</p>
        <button className={cx('button')} onClick={onBack}>
          Quay về trang chủ
        </button>
      </div>
    </div>
  );
}

export default Unauthorize;
