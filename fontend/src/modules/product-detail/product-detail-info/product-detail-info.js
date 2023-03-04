import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProductToCartThunk } from '~/redux/cart/cart.thunk';
import { checkoutItem } from '~/redux/checkout/checkout.action';
import { VNDCurrency } from '~/shared/utils/currency';
import style from './product-detail-info.module.scss';

function ProductDetailInfo({ product }) {
  const { title, description, price, discount, Category } = product;
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onIncreaseQuantity = () => {
    setNumber((prev) => prev + 1);
  };
  const onDecreaseQuantity = () => {
    setNumber((prev) => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  };

  const onChangeQuantity = (e) => {
    const tmp = Number(e.target.value);
    setNumber(tmp);
  };

  const onAddToCart = () => {
    dispatch(addProductToCartThunk(product, number));
  };

  const onPurchase = () => {
    dispatch(checkoutItem(product, number));
    dispatch(addProductToCartThunk(product, number));
    navigate('/cart-purchase');
  };

  return (
    <div className="text-start">
      <h3 className="section-title text-4xl my-2 text-primary">{title}</h3>
      <div className="flex align-center">
        <span className={`${style.categoryName}`}>{Category.name}</span>
      </div>

      <div className={`${style.price}`}>
        <span className={`${style.oldPrice}`}>{VNDCurrency(price)}</span>
        <span className={`${style.salePrice}`}>{VNDCurrency(price - discount)}</span>
        <span className={`${style.sale} text-center`}>{VNDCurrency(discount)} giảm</span>
      </div>
      <div className="my-2">
        <h5 className={`text-primary font-semibold text-xl ${style.title}`}>Mô tả</h5>
        <p className={`${style.desc}`}>{description}</p>
      </div>
      <div className="flex align-center flex-wrap">
        <span className={`text-primary font-semibold text-xl ${style.title}`}>Số lượng: </span>
        <div className={`${style.quantity}`}>
          <button onClick={onDecreaseQuantity}>-</button>
          <input type="number" value={number} onChange={(e) => onChangeQuantity(e)} />
          <button onClick={onIncreaseQuantity}>+</button>
        </div>
      </div>
      <div className={`${style.action}`}>
        <button className={`${style.btnAdd}`} onClick={onAddToCart}>
          <i className="fa-solid fa-cart-plus"></i>
          <span>Thêm vào giỏ hàng</span>
        </button>
        <button className={`${style.btnBuy}`} onClick={onPurchase}>
          Mua ngay
        </button>
      </div>
    </div>
  );
}

export default ProductDetailInfo;
