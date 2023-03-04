import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateProductAsync } from '~/redux/product/product.thunk';
import Spinner from '~/shared/components/spinner/spinner';
import productService from '~/shared/services/product.service';
import FormProduct from '../form-product/form-product';

function EditProductPage() {
  const { productId } = useParams();
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    productService.getProduct(productId).then((res) => {
      setProductData(res.data.product);
      setLoading(false);
    });
  }, []);

  const onEditProduct = (id, data) => {
    dispatch(updateProductAsync(id, data));
    navigate('/admin');
  };

  return (
    <div>
      <h4 className="section-title text-3xl">Cập nhật sản phẩm</h4>
      {loading === true ? (
        <Spinner loading={true} />
      ) : (
        <FormProduct
          handleSubmitForm={onEditProduct}
          formData={productData}
          title={'Cập nhật sản phẩm'}
        />
      )}
    </div>
  );
}

export default EditProductPage;
