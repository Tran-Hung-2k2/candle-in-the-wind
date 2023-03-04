import React from 'react';
import style from './order-user-list.module.scss';
import classNames from 'classnames/bind';
import OrderItem from '../order-item/order-item';

const cx = classNames.bind(style);

function OrderUserList({ orders }) {
  return (
    <>
      <div className={cx('table')}>
        <table>
          <thead className={cx('header')}>
            <th className={cx('header-cell ')}>ID đơn hàng</th>
            <th className={cx('header-cell')}>Danh sách sản phẩm</th>
            <th className={cx('header-cell')}>Trạng thái</th>
            <th className={cx('header-cell')}>Tổng giá</th>
            <th className={cx('header-cell')}>Ngày tạo</th>
          </thead>
          <tbody>
            {orders && orders.length > 0
              ? orders.map((item, idx) => {
                  return <OrderItem key={idx} order={item} />;
                })
              : 'Không có dữ liệu'}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default OrderUserList;
