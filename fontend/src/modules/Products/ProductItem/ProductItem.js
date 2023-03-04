import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProductToCartThunk } from '~/redux/cart/cart.thunk';
import { VNDCurrency } from '~/shared/utils/currency';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddItemToCart = (item) => {
    dispatch(addProductToCartThunk(item, 1));
  };

  const onViewDetailProduct = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('item')}>
        <article onClick={() => onViewDetailProduct(data.ID_Product)}>
          <div
            className={cx('image')}
            style={{
              backgroundImage: `url(${data?.Images?.[0]?.content})`,
            }}
          ></div>
          <div className={cx('info')}>
            <Tippy content={data.title}>
              <h4 className={cx('name')}>{data.title}</h4>
            </Tippy>
            <Tippy content={data.description}>
              <p className={cx('description')}>{data.description}</p>
            </Tippy>
          </div>
        </article>

        <div className={cx('bottom')}>
          <span className={cx('prize')}>{VNDCurrency(data.price)}</span>
          <span className={cx('add')} onClick={() => onAddItemToCart(data)}>
            Thêm vào giỏ hàng
          </span>
        </div>

        <div className={cx('sale')}>{VNDCurrency(data.discount)} giảm</div>
      </div>
    </div>
  );
}

export default ProductItem;
