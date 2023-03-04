const { FETCH_ORDER_SUCCESS, FETCH_ORDER_REQUEST, FETCH_ORDER_FAILURE } = require('./order.type');

const initialState = {
  loading: false,
  order: [],
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        order: [],
      };
    case FETCH_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload?.reverse(),
      };
    case FETCH_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default orderReducer;
