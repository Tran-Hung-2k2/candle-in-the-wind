import React from 'react';
import style from './admin-header.module.scss';
import classNames from 'classnames/bind';
import User from '~/layout/header/components/user/user';
import { useSelector } from 'react-redux';

const cx = classNames.bind(style);

function AdminHeader() {
  const { user } = useSelector((state) => state.userProfile);
  return (
    <div className="flex justify-end px-4 py-4 bg-white">
      <User user={user} disabledAction={true} />
    </div>
  );
}

export default AdminHeader;
