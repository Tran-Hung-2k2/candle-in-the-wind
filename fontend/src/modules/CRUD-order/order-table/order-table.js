import React from 'react';
import style from './order-table.module.scss';
import classNames from 'classnames/bind';
import OrderTableItem from '../order-table-item/order-table-item';

const cx = classNames.bind(style);

function OrderTable({ orders }) {
  return (
    <div className={cx('table')}>
      <table>
        <thead className={cx('header')}>
          <th className={cx('header-cell')}>ID người dùng</th>
          <th className={cx('header-cell')}>Tên người dùng</th>
          <th className={cx('header-cell')}>ID đơn hàng</th>
          <th className={cx('header-cell')}>Trạng thái</th>
          <th className={cx('header-cell')}>Tổng giá</th>
          <th className={cx('header-cell')}>Ngày tạo</th>
        </thead>
        <tbody>
          {orders && orders.length > 0
            ? orders.map((item, idx) => {
                return <OrderTableItem key={idx} order={item} />;
              })
            : 'Không có dữ liệu'}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
