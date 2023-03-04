import React from 'react';
import style from './admin-sidebar.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '~/redux/user-profile/user-profile.thunk';

const cx = classNames.bind(style);

const menuList = [
  {
    label: 'Quản lí sản phẩm',
    path: '/admin/product',
  },
  {
    label: 'Quản lí mã giảm giá',
    path: '/admin/voucher',
  },
  {
    label: 'Quản lí đơn hàng',
    path: '/admin/order',
  },
  {
    label: 'Quản lí diễn đàn',
    path: 'admin/post',
  },
];

function AdminSidebar() {
  const dispatch = useDispatch();
  const logoutAccount = () => {
    dispatch(logout());
  };
  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('logo')}>Candle In The Wind</h1>
      <ul className={cx('nav')}>
        {menuList.map((item, index) => {
          return (
            <li key={index} className={cx('nav-item')}>
              <NavLink
                className={({ isActive }) => cx('nav-link', { active: isActive })}
                to={item.path}
              >
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className={cx('action')}>
        <button className={cx('logout-button')} onClick={logoutAccount}>
          Đăng xuất
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;
