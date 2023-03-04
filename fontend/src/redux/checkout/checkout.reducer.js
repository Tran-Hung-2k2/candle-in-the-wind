const { CHECKOUT_ITEM, CHECKOUT_CART } = require('./checkout.type');

const initialState = {
  items: [],
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_ITEM: {
      const { item, quantity } = action.payload;
      return { ...state, items: [{ ...item, quantity }] };
    }
    case CHECKOUT_CART: {
      return {
        ...state,
        items: [...action.payload],
      };
    }
    default:
      return state;
  }
};

export default checkoutReducer;
