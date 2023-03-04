import React from 'react';
import style from './product-table-item.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteProductAsync } from '~/redux/product/product.thunk';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(style);
function ProductTableItem({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDeleteItem = () => {
    dispatch(deleteProductAsync(product.ID_Product));
  };

  const onEditItem = () => {
    navigate(`/admin/product/edit/${product.ID_Product}`);
  };

  return (
    <tr className={cx('row')}>
      <td className={cx('image')}>
        <div className={cx('image-wrapper')}>
          <img src={product?.Images?.[0]?.content} alt="" />
        </div>
      </td>
      <td className={cx('title')}>
        <h4>{product.title}</h4>
      </td>
      <td className={cx('id-product')}>
        <p>{product.ID_Product}</p>
      </td>
      <td className={cx('category')}>
        <p>{product.Category?.name}</p>
      </td>
      <td className={cx('price')}>
        <p>{product.price}</p>
      </td>
      <td className={cx('created-at')}>
        <p>{product.createdAt}</p>
      </td>
      <td className={cx('action')}>
        <button onClick={onEditItem}>
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button onClick={onDeleteItem}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
}

export default ProductTableItem;
