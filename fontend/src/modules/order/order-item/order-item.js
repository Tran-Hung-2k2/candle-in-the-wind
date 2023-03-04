import React from 'react';
import style from './order-item.module.scss';
import classNames from 'classnames/bind';
import { VNDCurrency } from '~/shared/utils/currency';
import OrderProductList from '../order-product-list/order-product-list';

const cx = classNames.bind(style);

function OrderItem({ order }) {
  return (
    <tr className={cx('row')}>
      <td className={cx('order-id')}>
        <p>{order?.ID_Order}</p>
      </td>
      <td className={cx('product-list')}>
        <OrderProductList products={order?.Products} />
      </td>
      <td className={cx('status')}>
        <p>{order?.status}</p>
      </td>
      <td className={cx('total')}>{VNDCurrency(order?.total_money)}</td>
      <td className={cx('created-at')}>
        <p>{order?.createdAt}</p>
      </td>
    </tr>
  );
}

export default OrderItem;
