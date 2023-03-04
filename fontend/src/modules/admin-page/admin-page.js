import React from 'react';
import AdminMainLayout from './admin-main-layout/admin-main-layout';
import AdminSidebar from './admin-sidebar/admin-sidebar';
import style from './admin-page.module.scss';
import classNames from 'classnames/bind';
import AdminHeader from './admin-header/admin-header';

const cx = classNames.bind(style);

function AdminPage() {
  return (
    <div className="flex">
      <div className={cx('sidebar')}>
        <AdminSidebar />
      </div>
      <div className={cx('main-layout')}>
        <AdminHeader />
        <AdminMainLayout />
      </div>
    </div>
  );
}

export default AdminPage;
