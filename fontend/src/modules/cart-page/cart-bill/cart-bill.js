import React, { useMemo } from 'react';
import style from './cart-bill.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { VNDCurrency } from '~/shared/utils/currency';
import { checkoutCart } from '~/redux/checkout/checkout.action';

const cx = classNames.bind(style);
function CartBill() {
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const total = useMemo(() => {
    const res = cartItems.reduce((acc, cur) => {
      return acc + (cur.price - cur.discount) * cur.quantity;
    }, 0);
    return res;
  });

  const onPurchase = () => {
    dispatch(checkoutCart(cartItems));
    navigate('/cart-purchase');
  };

  return (
    <>
      {cartItems && cartItems.length > 0 && (
        <div className="py-4 my-5 ">
          <div className={cx('bill')}>
            <h4 className="section-title text-3xl">Đơn hàng</h4>
            <div className="flex space-between">
              <span className="text-base font-semibold my-1">Tổng tiền thanh toán:</span>
              <span className={cx('price')}>{VNDCurrency(total)}</span>
            </div>
            <button className={cx('button')} onClick={onPurchase}>
              Đặt hàng
            </button>
            <h5>Áp dụng mã giảm giá ở bước tiếp theo</h5>
          </div>
        </div>
      )}
    </>
  );
}

export default CartBill;
