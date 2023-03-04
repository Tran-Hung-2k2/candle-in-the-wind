import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './auth-wrapper.module.scss';

function AuthWrapper({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const openLoginTab = () => {
    navigate('/login');
  };

  const openRegisterTab = () => {
    navigate('/register');
  };

  const isLoginTab = () => {
    return pathname === '/login';
  };

  const isRegisterTab = () => {
    return pathname === '/register';
  };

  return (
    <div className={`${style.wrapper}`}>
      {/* Tabs */}
      <div className="flex">
        <div className={`${style.tab} ${isLoginTab() ? style.active : ''}`} onClick={openLoginTab}>
          <span>Đăng nhập</span>
        </div>
        <div
          className={`${style.tab} ${isRegisterTab() ? style.active : ''}`}
          onClick={openRegisterTab}
        >
          <span>Đăng ký</span>
        </div>
      </div>
      {/* Modal body */}
      <div className={`${style.form}`}>
        {children}
        <p className={`${style.alert}`}>
          Bằng việc chọn tiếp tục, bạn đã đồng ý với <span>Điều khoản & Điều kiện</span> cùng{' '}
          <span>Chính sách bảo mật và chia sẻ thông tin</span> của Candle In The Wind
        </p>
      </div>
    </div>
  );
}

export default AuthWrapper;
