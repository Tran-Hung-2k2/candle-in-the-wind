import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './cart.module.scss';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Cart() {
  const { cartQuantity } = useSelector((state) => state.cart);
  return (
    <div className="flex justify-center align-center">
      <Tippy content="Giỏ hàng" placement="bottom">
        <Link to="/cart" className={cx('cart-icon')}>
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartQuantity ? <div className={cx('count')}>{cartQuantity}</div> : null}
        </Link>
      </Tippy>
    </div>
  );
}

export default Cart;
