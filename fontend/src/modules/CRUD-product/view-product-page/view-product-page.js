import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadProductByCategory } from '~/redux/product/product.thunk';
import Spinner from '~/shared/components/spinner/spinner';
import ProductTable from '../product-table/product-table';
import Paginator from '~/shared/components/paginator/paginator';
import productService from '~/shared/services/product.service';
import style from './view-product-page.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const PRODUCT_PER_PAGE = 4;

function ViewProductPage() {
  const navigate = useNavigate();
  const { loading, product, error } = useSelector((state) => state.product);
  const [totalPage, setTotalPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [displayProduct, setDisplayProduct] = useState([]);
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState();

  const onCreateProduct = () => {
    navigate('/admin/product/create');
  };

  useEffect(() => {
    productService.getAllCategory().then((res) => {
      setCategories(res.data.categories);
    });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    if (product) {
      setCurrentPage(1);
      const prodList = [];
      for (let i = 0; i < PRODUCT_PER_PAGE && i < product?.length; i++) {
        prodList.push(product[i]);
      }
      setDisplayProduct(prodList);
    }
    setTotalPage(product?.length ? Math.ceil(product?.length / PRODUCT_PER_PAGE) : 1);
  }, [product]);

  useEffect(() => {
    if (product) {
      const tmp = (currentPage - 1) * PRODUCT_PER_PAGE;
      const prodList = [];
      for (let i = tmp; i < tmp + PRODUCT_PER_PAGE && i < product?.length; i++) {
        prodList.push(product[i]);
      }
      setDisplayProduct(prodList);
    }
  }, [currentPage]);

  const onFilter = (event) => {
    const categoryId = event.target.value;
    setFilterCategory(categoryId);
  };

  useEffect(() => {
    dispatch(loadProductByCategory(filterCategory));
  }, [filterCategory]);

  return (
    <>
      <div className="flex space-between">
        <h2 className="text-primary text-xl section-title">Quản lí sản phẩm</h2>
        <button className="create-button" onClick={onCreateProduct}>
          Tạo sản phẩm
        </button>
      </div>
      <div>
        <div className={cx('filter-container')}>
          <span className="text-base font-semibold">Lọc sản phẩm</span>
          <select className={cx('filter')} onChange={(event) => onFilter(event)}>
            <option className={cx('filter-option')} value={'all'}>
              Tất cả
            </option>
            {categories &&
              categories.length > 0 &&
              categories.map((item, idx) => {
                return (
                  <option className={cx('filter-option')} key={idx} value={item.ID_Category}>
                    {item?.name}
                  </option>
                );
              })}
          </select>
        </div>
        {error && <h3>Error</h3>}
        {loading ? (
          <Spinner />
        ) : (
          <>
            <ProductTable products={displayProduct} />
            <Paginator
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              numberPage={totalPage}
            />
          </>
        )}
      </div>
    </>
  );
}

export default ViewProductPage;
