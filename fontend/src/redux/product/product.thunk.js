import ProductService from '~/shared/services/product.service';
import { ErrorNotify, SuccessNotify } from '~/shared/utils/notify';
import {
  createProduct,
  deleteProduct,
  fetchProductFailure,
  fetchProductRequest,
  fetchProductSuccess,
  updateProduct,
} from './product.action';

const loadProductByCategory = (categoryId = 'all') => {
  return function (dispatch) {
    dispatch(fetchProductRequest());
    if (categoryId !== 'all') {
      ProductService.getProductByCategory(categoryId)
        .then((response) => {
          dispatch(fetchProductSuccess(response.data));
        })
        .catch((error) => dispatch(fetchProductFailure(error.data)));
    } else {
      ProductService.getAllProduct()
        .then((response) => {
          dispatch(fetchProductSuccess(response.data));
        })
        .catch((error) => dispatch(fetchProductFailure(error.data)));
    }
  };
};

const loadProductByKeyword = (key) => {
  return function (dispatch) {
    dispatch(fetchProductRequest());
    ProductService.getProductByKey(key)
      .then((response) => {
        console.log(response.data);
        dispatch(fetchProductSuccess(response.data));
      })
      .catch((error) => dispatch(fetchProductFailure(error.data)));
  };
};

const createProductAsync = (product) => {
  return function (dispatch) {
    ProductService.createProduct(product)
      .then((res) => {
        dispatch(createProduct(product));
        SuccessNotify('Thêm mới sản phẩm thành công');
      })
      .catch(() => {
        ErrorNotify('Đã có lỗi xảy ra');
      });
  };
};

const deleteProductAsync = (id) => {
  return function (dispatch) {
    ProductService.deleteProduct(id)
      .then(() => {
        dispatch(deleteProduct(id));
        SuccessNotify('Xóa sản phẩm thành công');
      })
      .catch((error) => {
        console.log(error);
        ErrorNotify('Đã có lỗi xảy ra');
      });
  };
};

const updateProductAsync = (id, data) => {
  return function (dispatch) {
    ProductService.updateProduct(id, data)
      .then((res) => {
        dispatch(updateProduct(id, data));
        SuccessNotify('Cập nhật thành công');
      })
      .catch((err) => {
        console.log(err);
        ErrorNotify('Đã có lỗi xảy ra');
      });
  };
};

export {
  loadProductByCategory,
  loadProductByKeyword,
  createProductAsync,
  deleteProductAsync,
  updateProductAsync,
};
