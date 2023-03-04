import React from 'react';
import style from './cart-page.module.scss';
import classNames from 'classnames/bind';
import CartList from './cart-list/cart-list';
import CartBill from './cart-bill/cart-bill';

const cx = classNames.bind(style);

function CartPage() {
  return (
    <div>
      <h2 className="section-title text-center">Shopping Cart</h2>
      <CartList />
      <CartBill />
    </div>
  );
}

export default CartPage;
