import React from 'react';
import style from './checkout.module.scss';
import classNames from 'classnames/bind';
import CheckoutForm from './checkout-form/checkout-form';
import CheckoutMethod from './checkout-method/checkout-method';
import CheckoutProduct from './checkout-product/checkout-product';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { checkoutThunk } from '~/redux/checkout/checkout.thunk';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(style);

function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phoneNumber: '',
      email: '',
      city: '',
      address: '',
      method: null,
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handle = (data) => {
    // if (items && items.length > 0) console.log({ ...data, items });
    dispatch(checkoutThunk());
    navigate('/home');
  };
  return (
    <div>
      <form onSubmit={handleSubmit((data) => handle(data))} className="row">
        <div className="col l-6 m-6 c-12">
          <div className="row">
            <div className="col l-12 m-12 c-12">
              <CheckoutForm register={register} errors={errors} />
            </div>
          </div>
          <div className="row">
            <div className="col l-12 m-12 c-12">
              <CheckoutMethod register={register} errors={errors} />
            </div>
          </div>
        </div>
        <div className="col l-6 m-6 c-12">
          <div className={cx('order-summary')}>
            <CheckoutProduct>
              <button type="submit" className={cx('confirm-button')}>
                Đặt hàng
              </button>
            </CheckoutProduct>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
