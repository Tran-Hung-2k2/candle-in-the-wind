import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginAccount } from '~/redux/user-profile/user-profile.thunk';
import { requiredField, minLengthField, emailField } from '@utils/validator';
import Input from '@components/input/input';
import style from './login.module.scss';
import AuthWrapper from '../auth-wrapper/auth-wrapper';
import { ADMIN_ROLE } from '~/shared/constants/role';
import { useCookies } from 'react-cookie';
import userService from '~/shared/services/user.service';

function Login() {
  const userProfile = useSelector((state) => state.userProfile);
  const { isLoggedIn, error, role } = userProfile;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [cookies, setCookies] = useCookies(['user']);

  const [errorMsg, setErrorMsg] = useState('');

  const login = async (detail) => {
    dispatch(loginAccount(detail));
    try {
      const response = await userService.login(detail);
      setCookies('accessToken', response.data.accessToken, { path: '/' });
    } catch (error) {
      console.log(error);
    }
  };

  const isAdmin = () => {
    return role === ADMIN_ROLE;
  };

  useEffect(() => {
    if (isLoggedIn) {
      if (isAdmin()) {
        navigate('/admin');
        return;
      }
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (!error) {
      setErrorMsg('');
      return;
    }
    const status = error?.response?.status;
    if (status === 429) setErrorMsg('No server response');
    else if (status === 400 || status === 500) setErrorMsg('Tài khoản hoặc mật khẩu không đúng');
    else setErrorMsg('Vui lòng kiểm tra kết nối internet');
  }, [error]);

  return (
    <AuthWrapper>
      <form className={`${style.form}`} onSubmit={handleSubmit((data) => login(data))}>
        <h4>Cảm ơn bạn đã trở lại</h4>
        {errorMsg && errorMsg.length && <p className={`${style.alert}`}>{errorMsg}</p>}
        <div className={`${style.formGroup}`}>
          <Input
            formControl="email"
            placeholder="Email"
            register={register}
            required={requiredField()}
            pattern={emailField()}
            error={errors.email}
          />
        </div>
        <div className={`${style.formGroup}`}>
          <Input
            formControl="password"
            placeholder="Mật khẩu"
            type="password"
            register={register}
            required={requiredField()}
            minLength={minLengthField(4)}
            error={errors.password}
          />
        </div>
        <button type="submit" className={`${style.submitButton}`}>
          Đăng nhập
        </button>
      </form>
    </AuthWrapper>
  );
}

export default Login;
