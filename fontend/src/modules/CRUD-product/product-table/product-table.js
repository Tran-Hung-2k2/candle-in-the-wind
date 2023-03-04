import React from 'react';
import ProductTableItem from '../product-table-item/product-table-item';
import style from './product-table.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function ProductTable({ products }) {
  return (
    <div className={cx('table')}>
      <table>
        <thead className={cx('header')}>
          <th className={cx('header-cell')}>Hình ảnh</th>
          <th className={cx('header-cell')}>Tên sản phẩm</th>
          <th className={cx('header-cell')}>Mã sản phẩm</th>
          <th className={cx('header-cell')}>Danh mục</th>
          <th className={cx('header-cell')}>Giá</th>
          <th className={cx('header-cell')}>Ngày thêm</th>
          <th className={cx('header-cell')}>Tác vụ</th>
        </thead>
        <tbody>
          {products && products.length > 0
            ? products.map((item, idx) => {
                return <ProductTableItem key={idx} product={item} />;
              })
            : 'Không có dữ liệu'}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
