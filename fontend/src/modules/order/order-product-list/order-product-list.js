import React from 'react';
import style from './order-product-list.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function OrderProductList({ products }) {
  return (
    <>
      {products &&
        products.length > 0 &&
        products.map((item, idx) => {
          return (
            <div className="flex space-between py-1" key={idx}>
              <div className={cx('product-title')}>
                <p className="font-semibold">{item?.title}</p>
              </div>
              <div className={cx('product-quantity')}>
                <p>
                  Số lượng: <span>{item?.quantity}</span>
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default OrderProductList;
