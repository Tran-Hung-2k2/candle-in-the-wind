const { default: cartService } = require('~/shared/services/cart.service');
const { ErrorNotify, SuccessNotify } = require('~/shared/utils/notify');
const {
  fetchCartRequest,
  fetchCartSuccess,
  addItemToCart,
  removeItemInCart,
} = require('./cart.action');

const loadCart = () => {
  return function (dispatch) {
    dispatch(fetchCartRequest());
    cartService
      .getCart()
      .then((res) => {
        dispatch(fetchCartSuccess(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const addProductToCartThunk = (item, quantity) => {
  return function (dispatch) {
    cartService
      .addProductToCart(item.ID_Product, quantity)
      .then((res) => {
        dispatch(addItemToCart(item, quantity));
        SuccessNotify('Thêm vào giỏ hàng thành công');
      })
      .catch((err) => {
        ErrorNotify('Bạn chưa đăng nhập');
      });
  };
};

const deleteProductFromCartThunk = (id) => {
  return function (dispatch) {
    cartService
      .deleteProductFromCart(id)
      .then((res) => {
        dispatch(removeItemInCart(id));
      })
      .catch((err) => {
        ErrorNotify('Đã xảy ra lỗi');
      });
  };
};

export { loadCart, addProductToCartThunk, deleteProductFromCartThunk };
