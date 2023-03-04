import { clearCart } from '../cart/cart.action';

const { default: cartService } = require('~/shared/services/cart.service');
const { SuccessNotify, ErrorNotify } = require('~/shared/utils/notify');

const checkoutThunk = () => {
  return function (dispatch) {
    cartService
      .checkout()
      .then((res) => {
        console.log(res.data);
        dispatch(clearCart());
        SuccessNotify('Đặt hàng thành công');
      })
      .catch(() => {
        ErrorNotify('Đã có lỗi xảy ra');
      });
  };
};

export { checkoutThunk };
