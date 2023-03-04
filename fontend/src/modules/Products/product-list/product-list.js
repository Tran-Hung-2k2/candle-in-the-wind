import React from 'react';
import classNames from 'classnames/bind';
import styles from './product-list.module.scss';
import ProductItem from '../ProductItem/ProductItem';
import NotFoundProduct from '../NotFoundProduct/NotFoundProduct';

const cx = classNames.bind(styles);

function ProductList({ products }) {
  return (
    <>
      {products.length === 0 ? <NotFoundProduct /> : null}
      {products &&
        products.length > 0 &&
        products.map((item, index) => {
          return (
            <div key={index} className="col l-3 m-3 c-4">
              <ProductItem data={item} />
            </div>
          );
        })}
    </>
  );
}

export default ProductList;
