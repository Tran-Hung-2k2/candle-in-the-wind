const {
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  ADD_ITEM_TO_CART,
  INCREASE_ITEM_IN_CART,
  DECREASE_ITEM_IN_CART,
  REMOVE_ITEM_IN_CART,
  CLEAR_CART,
} = require('./cart.type');

const fetchCartRequest = () => {
  return {
    type: FETCH_CART_REQUEST,
  };
};

const fetchCartSuccess = (payload) => {
  return {
    type: FETCH_CART_SUCCESS,
    payload,
  };
};

const fetchCartFailure = (error) => {
  return {
    type: FETCH_CART_FAILURE,
    payload: error,
  };
};

const addItemToCart = (item, quantity = 1) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: {
      product: item,
      quantity,
    },
  };
};

const increaseItemInCart = (id) => {
  return {
    type: INCREASE_ITEM_IN_CART,
    payload: id,
  };
};

const decreaseItemInCart = (id) => {
  return {
    type: DECREASE_ITEM_IN_CART,
    payload: id,
  };
};

const removeItemInCart = (id) => {
  return {
    type: REMOVE_ITEM_IN_CART,
    payload: id,
  };
};

const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export {
  fetchCartSuccess,
  fetchCartRequest,
  fetchCartFailure,
  addItemToCart,
  increaseItemInCart,
  decreaseItemInCart,
  removeItemInCart,
  clearCart,
};
