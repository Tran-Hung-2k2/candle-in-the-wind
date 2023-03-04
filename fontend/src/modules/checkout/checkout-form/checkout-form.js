import React from 'react';
import style from './checkout-form.module.scss';
import classNames from 'classnames/bind';
import Input from '@components/input/input';
import { requiredField, emailField, phoneNumber } from '@utils/validator';
const cx = classNames.bind(style);

function CheckoutForm({ register, errors }) {
  return (
    <div className={cx('wrapper')}>
      <h3 className="section-title text-xl">Delivery Information</h3>
      <div className={cx('form')}>
        <div className="row">
          <div className="col l-6 m-6 c-12">
            <div className={cx('form-group')}>
              <Input
                label={'Họ tên'}
                formControl="name"
                placeholder="Nguyễn Văn A"
                register={register}
                required={requiredField()}
                error={errors.name}
              />
            </div>
          </div>
          <div className="col l-6 m-6 c-12">
            <div className={cx('form-group')}>
              <Input
                label={'Số điện thoại'}
                formControl="phoneNumber"
                placeholder="+0123456789"
                type="tel"
                register={register}
                required={requiredField()}
                pattern={phoneNumber()}
                error={errors.phoneNumber}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col l-6 m-6 c-12">
            <div className={cx('form-group')}>
              <Input
                label={'Email'}
                formControl="email"
                placeholder="nguyenvana@gmail.com"
                type="email"
                register={register}
                required={requiredField()}
                error={errors.email}
                pattern={emailField()}
              />
            </div>
          </div>
          <div className="col l-6 m-6 c-12">
            <div className={cx('form-group')}>
              <Input
                label={'Thành phố'}
                formControl="city"
                placeholder="Hà Nội"
                register={register}
                required={requiredField()}
                error={errors.city}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col l-12 m-12 c-12">
            <div className={cx('form-group')}>
              <Input
                label={'Địa chỉ'}
                formControl="address"
                placeholder="Số 1 ngõ 2 quận ...."
                register={register}
                required={requiredField()}
                error={errors.address}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
