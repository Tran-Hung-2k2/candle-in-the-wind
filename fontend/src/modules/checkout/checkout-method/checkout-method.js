import React from 'react';
import style from './checkout-method.module.scss';
import classNames from 'classnames/bind';
import Input from '@components/input/input';
import { requiredField } from '@utils/validator';
const cx = classNames.bind(style);

function CheckoutMethod({ register, errors }) {
  return (
    <div className={cx('wrapper')}>
      <h2 className="section-title text-xl">Checkout Method</h2>
      <div className={cx('form')}>
        <div className={cx('radio-group')}>
          <div className={cx('radio-button')}>
            <Input
              label={'Thanh toán online'}
              formControl="method"
              type={'radio'}
              register={register}
              required={requiredField()}
              value={'Online Payment'}
              error={errors.method}
              radioButton={true}
            />
          </div>
          <div className={cx('radio-button')}>
            <Input
              label={'Thanh toán khi nhận hàng'}
              formControl="method"
              type={'radio'}
              register={register}
              required={requiredField()}
              value={'Cash on delivery'}
              radioButton={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutMethod;
