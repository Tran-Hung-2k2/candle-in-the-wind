import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './admin-main-layout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function AdminMainLayout() {
  return (
    <div className={cx('wrapper')}>
      <Outlet />
    </div>
  );
}

export default AdminMainLayout;
