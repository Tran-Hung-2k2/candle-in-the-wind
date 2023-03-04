const { default: orderService } = require('~/shared/services/order.service');
const { ErrorNotify } = require('~/shared/utils/notify');
const { fetchCartFailure } = require('../cart/cart.action');
const { fetchOrderRequest, fetchOrderSuccess } = require('./order.action');

const loadAllOrder = () => {
  return function (dispatch) {
    dispatch(fetchOrderRequest());
    orderService
      .getAllOrder()
      .then((res) => {
        dispatch(fetchOrderSuccess(res.data?.Orders));
      })
      .catch((err) => {
        dispatch(fetchCartFailure(err));
        ErrorNotify('Đã xảy ra lỗi');
      });
  };
};

const loadOrderUser = () => {
  return function (dispatch) {
    dispatch(fetchOrderRequest());
    orderService
      .getOrderUser()
      .then((res) => {
        dispatch(fetchOrderSuccess(res.data?.Orders));
      })
      .catch((err) => {
        dispatch(fetchCartFailure(err));
        ErrorNotify('Đã xảy ra lỗi');
      });
  };
};

export { loadOrderUser, loadAllOrder };
