import React from 'react';
import style from './checkout-product-item.module.scss';
import classNames from 'classnames/bind';
import { VNDCurrency } from '~/shared/utils/currency';

const cx = classNames.bind(style);

function CheckoutProductItem({ data }) {
  const { title, price, quantity, discount } = data;
  return (
    <div className="flex py-2">
      <div className={cx('item-image')}>
        <img src={data?.Images?.[0]?.content} alt="" />
      </div>
      <div className={cx('item-info')}>
        <h5 className={cx('item-title')}>{title}</h5>
        <p className={cx('item-price')}>{VNDCurrency(price - discount)}</p>
      </div>
      <div className={cx('item-quantity')}>
        <p>Số lượng: {quantity}</p>
      </div>
    </div>
  );
}

export default CheckoutProductItem;
