import React, { useState } from 'react';
import style from './reset-password.module.scss';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { requiredField, minLengthField } from '@utils/validator';
import Input from '@components/input/input';
import { useSelector } from 'react-redux';
import userService from '~/shared/services/user.service';
import { SuccessNotify } from '~/shared/utils/notify';
import { useNavigate } from 'react-router-dom';
import Spinner from '~/shared/components/spinner/spinner';
const cx = classNames.bind(style);

function ResetPassword() {
  const { user } = useSelector((state) => state.userProfile);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });
  const navigate = useNavigate();
  const [alert, setAlert] = useState('');
  const changePassword = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      setAlert('Mật khẩu xác nhận không trùng khớp');
      return;
    }
    setAlert('');
    setLoading(true);
    try {
      const res = await userService.login({ email: user.email, password: data.currentPassword });
      if (res.data.isError) return;

      SuccessNotify('Đổi mật khẩu thành công');
      navigate('/home');
      setLoading(false);
      setAlert('');
    } catch {
      setAlert('Mật khẩu không chính xác');
      setLoading(false);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <form className={cx('form')} onSubmit={handleSubmit((data) => changePassword(data))}>
        <h5 className="section-title text-xl text-center">Đổi mật khẩu</h5>
        {alert && alert.length > 0 && <p className={cx('error')}>{alert}</p>}
        {loading ? (
          <Spinner loading={true} />
        ) : (
          <>
            <div className={cx('form-group')}>
              <Input
                label="Mật khẩu hiện tại"
                formControl="currentPassword"
                type="password"
                register={register}
                required={requiredField()}
                minLength={minLengthField(4)}
                error={errors.currentPassword}
              />
            </div>
            <div className={cx('form-group')}>
              <Input
                label="Mật khẩu mới"
                formControl="newPassword"
                type="password"
                register={register}
                required={requiredField()}
                minLength={minLengthField(4)}
                error={errors.newPassword}
              />
            </div>
            <div className={cx('form-group')}>
              <Input
                label="Xác nhận mật khẩu"
                formControl="confirmPassword"
                type="password"
                register={register}
                required={requiredField()}
                minLength={minLengthField(4)}
                error={errors.confirmPassword}
              />
            </div>
            <button type="submit" className={cx('submit-button')}>
              Đổi mật khẩu
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default ResetPassword;
