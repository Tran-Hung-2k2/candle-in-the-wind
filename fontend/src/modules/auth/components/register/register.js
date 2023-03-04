import React from 'react';
import style from './register.module.scss';
import { useForm } from 'react-hook-form';
import Input from '@components/input/input';
import {
  requiredField,
  minLengthField,
  maxLengthField,
  emailField,
  phoneNumber,
} from '@utils/validator';
import AuthWrapper from '../auth-wrapper/auth-wrapper';
import { useDispatch } from 'react-redux';
import { registerAccount } from '~/redux/user-profile/user-profile.thunk';

function Register() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      phone_number: '',
      address: '',
      password: '',
    },
  });

  const onRegister = (data) => {
    dispatch(registerAccount(data));
  };

  return (
    <AuthWrapper>
      <form className={`${style.form}`} onSubmit={handleSubmit((data) => onRegister(data))}>
        <h4>Đăng ký để Shop có cơ hội phục vụ bạn tốt hơn.</h4>
        <div className={`${style.formGroup}`}>
          <Input
            formControl="fullname"
            placeholder="Tên tài khoản"
            register={register}
            required={requiredField()}
            minLength={minLengthField(4)}
            maxLength={maxLengthField(15)}
            error={errors.fullname}
          />
        </div>
        <div className={`${style.formGroup}`}>
          <Input
            formControl="email"
            placeholder="Email đăng nhập"
            register={register}
            required={requiredField()}
            pattern={emailField()}
            error={errors.email}
          />
        </div>
        <div className={`${style.formGroup}`}>
          <Input
            formControl="phone_number"
            placeholder="+0123456789"
            type="tel"
            register={register}
            required={requiredField()}
            pattern={phoneNumber()}
            error={errors.phone_number}
          />
        </div>
        <div className={`${style.formGroup}`}>
          <Input
            formControl="password"
            placeholder="Mật khẩu"
            type="password"
            register={register}
            required={requiredField()}
            minLength={minLengthField(6)}
            error={errors.password}
          />
        </div>
        <div className={`${style.formGroup}`}>
          <Input
            formControl="address"
            placeholder="Địa chỉ"
            register={register}
            required={requiredField()}
            error={errors.address}
          />
        </div>
        <button type="submit" className={`${style.submitButton}`}>
          Đăng ký
        </button>
      </form>
    </AuthWrapper>
  );
}

export default Register;
