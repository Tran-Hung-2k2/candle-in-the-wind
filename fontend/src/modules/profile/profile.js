import React from 'react';
import style from './profile.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import avatar from '~/assets/images/avatar-default.jpg';

function Profile() {
  const { user } = useSelector((state) => state.userProfile);
  const userAvatar = user?.avatar ? userAvatar : avatar;
  return (
    <div className={`${style.wrapper}`}>
      <form className={`${style.form}`}>
        <h2 className={`${style.title}`}>Hồ Sơ Của Tôi</h2>
        <h4 className={`${style.subtitle}`}>Quản lý thông tin hồ sơ để bảo mật tài khoản</h4>
        <Link to="/reset-password" className={`${style.naviChange}`}>
          <FontAwesomeIcon icon={faPencil} className={`${style.icon}`} />
          <h4 className={`${style.subtitle}`}>Sửa thông tin</h4>
        </Link>
        <div className={`${style.container} row`}>
          <div className="col l-6 m-6 c-12">
            <div className={`${style.infoContainer}`}>
              <div className={`${style.component}`}>
                <h4 className={`${style.info}`}>Họ và tên:</h4>
                <h4 className={`${style.value}`}>{user.fullname}</h4>
              </div>
              <div className={`${style.component}`}>
                <h4 className={`${style.info}`}>Địa chỉ email: </h4>
                <h4 className={`${style.value}`}>{user.email}</h4>
              </div>
              <div className={`${style.component}`}>
                <h4 className={`${style.info}`}>Địa chỉ:</h4>
                <h4 className={`${style.value}`}>{user.address}</h4>
              </div>
              <div className={`${style.component}`}>
                <h4 className={`${style.info}`}>Số điện thoại: </h4>
                <h4 className={`${style.value}`}>{user.phone_number}</h4>
              </div>
            </div>
          </div>
          <div className="col l-6 m-6 c-12">
            <div className={`${style.imageContainer}`}>
              <img src={userAvatar} alt="" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;
