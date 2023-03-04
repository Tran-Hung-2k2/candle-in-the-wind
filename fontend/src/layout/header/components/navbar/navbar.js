import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './navbar.module.scss';
import User from '../user/user';
import { connect, useDispatch } from 'react-redux';
import { logout } from '~/redux/user-profile/user-profile.thunk';

function Navbar(props) {
  const navLinks = [
    {
      path: 'home',
      viewValue: 'Trang chủ',
    },
    {
      path: 'order-history',
      viewValue: 'Đơn hàng đã đặt',
    },
    // {
    //   path: 'forum',
    //   viewValue: 'Diễn đàn trao đổi',
    // },
  ];
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const { user } = props;
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  const onLogin = () => {
    navigate('/login');
  };

  const onRegister = () => {
    navigate('/register');
  };

  useEffect(() => {
    if (user) setLoggedIn(true);
    else setLoggedIn(false);
  }, [user]);

  return (
    <section className={`${style.navbar}`}>
      <div className="grid wide ">
        <div className="hide-on-mobile flex space-between align-center">
          <ul className={`${style.navbarLinks}`}>
            {navLinks &&
              navLinks.length > 0 &&
              navLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path}>{item.viewValue}</Link>
                  </li>
                );
              })}
          </ul>
          <div className={`${style.navbarAuth}`}>
            {loggedIn ? (
              <>
                <User user={user} />
                <button className={`${style.flatButton}`} onClick={() => handleLogout()}>
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                <button className={`${style.strokeButton}`} onClick={() => onLogin()}>
                  Đăng nhập
                </button>
                <button className={`${style.flatButton}`} onClick={() => onRegister()}>
                  Đăng ký
                </button>
              </>
            )}
          </div>
        </div>
        <div className="hide-on-tablet hide-on-pc py-1">
          <div className={`flex ${loggedIn === true ? 'space-between' : 'justify-end'}`}>
            {loggedIn && <User user={user} />}
            <div>
              {loggedIn ? (
                <>
                  <button className={`${style.flatButton}`} onClick={() => handleLogout()}>
                    Đăng xuất
                  </button>
                </>
              ) : (
                <>
                  <button className={`${style.strokeButton}`} onClick={() => onLogin()}>
                    Đăng nhập
                  </button>
                  <button className={`${style.flatButton}`} onClick={() => onRegister()}>
                    Đăng ký
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userProfile.user,
    isLoggedIn: state.userProfile.isLoggedIn,
  };
};

export default connect(mapStateToProps, null)(Navbar);
