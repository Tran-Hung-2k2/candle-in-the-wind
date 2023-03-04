import { CHECKOUT_CART, CHECKOUT_ITEM } from './checkout.type';

export const checkoutItem = (item, quantity) => {
  return {
    type: CHECKOUT_ITEM,
    payload: { item, quantity },
  };
};

export const checkoutCart = (cartItems) => {
  return {
    type: CHECKOUT_CART,
    payload: cartItems,
  };
};
