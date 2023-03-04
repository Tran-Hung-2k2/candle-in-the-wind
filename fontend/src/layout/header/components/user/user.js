import React from 'react';
import style from './user.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useNavigate } from 'react-router-dom';
import avatar from '~/assets/images/avatar-default.jpg';

function User({ user, disabledAction = false }) {
  const userAvatar = user?.avatar ? user.avatar : avatar;
  const navigate = useNavigate();
  const menuItem = [
    {
      value: 'Xem thông tin tài khoản',
      handleClick() {
        navigate('/profile');
      },
    },
    {
      value: 'Đổi mật khẩu',
      handleClick() {
        navigate('/reset-password');
      },
    },
  ];
  return (
    <>
      {disabledAction ? (
        <div className="flex align-center">
          <div className={`${style.avatar}`}>
            <img src={userAvatar} alt=""></img>
          </div>
          <p className={`${style.username}`}>{user?.fullname}</p>
        </div>
      ) : (
        <Tippy
          appendTo={() => document.body}
          interactive
          delay={[0, 400]}
          offset={[-50, 5]}
          render={(attrs) => (
            <div tabIndex="-1" {...attrs} className={`${style.options}`}>
              {menuItem.map((item, index) => {
                return (
                  <div className={`${style.item}`} key={index} onClick={item.handleClick}>
                    <span>{item.value}</span>
                  </div>
                );
              })}
            </div>
          )}
          hideOnClick={false}
        >
          <div className="flex align-center">
            <div className={`${style.avatar}`}>
              <img src={userAvatar} alt=""></img>
            </div>
            <p className={`${style.username}`}>{user?.fullname}</p>
          </div>
        </Tippy>
      )}
    </>
  );
}

export default User;
