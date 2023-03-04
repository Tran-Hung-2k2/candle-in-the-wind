import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '~/shared/components/spinner/spinner';
import productService from '~/shared/services/product.service';
import ProductDetailImage from './product-detail-images/product-detail-images';
import ProductDetailInfo from './product-detail-info/product-detail-info';

function ProductDetail() {
  const { productId } = useParams();

  const [product, setProduct] = useState(undefined);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    productService.getProduct(productId).then((res) => {
      setProduct(res.data.product);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && !product && <Spinner loading={loading} />}
      {!loading && product && (
        <div className="row py-6">
          <div className="col l-6 m-6 c-12">
            <ProductDetailImage images={product.Images} />
          </div>
          <div className="col l-6 m-6 c-12">
            <ProductDetailInfo product={product} />
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
