const { FETCH_ORDER_REQUEST, FETCH_ORDER_FAILURE, FETCH_ORDER_SUCCESS } = require('./order.type');

const fetchOrderRequest = () => {
  return {
    type: FETCH_ORDER_REQUEST,
  };
};

const fetchOrderSuccess = (payload) => {
  return {
    type: FETCH_ORDER_SUCCESS,
    payload,
  };
};

const fetchOrderFailure = (error) => {
  return {
    type: FETCH_ORDER_FAILURE,
    payload: error,
  };
};

export { fetchOrderRequest, fetchOrderSuccess, fetchOrderFailure };
