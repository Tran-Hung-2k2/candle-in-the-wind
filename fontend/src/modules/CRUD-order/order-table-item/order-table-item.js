import React from 'react';
import style from './order-table-item.module.scss';
import classNames from 'classnames/bind';
import { VNDCurrency } from '~/shared/utils/currency';

const cx = classNames.bind(style);

function OrderTableItem({ order }) {
  return (
    <tr className={cx('row')}>
      <td className={cx('user-id')}>
        <p>{order?.ID_User}</p>
      </td>
      <td className={cx('username')}>
        <h4>{order?.User?.fullname}</h4>
      </td>
      <td className={cx('order-id')}>
        <p>{order?.ID_Order}</p>
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

export default OrderTableItem;
