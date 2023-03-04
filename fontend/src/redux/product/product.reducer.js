const {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_FAILURE,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} = require('./product.type');

const initialProduct = {
  loading: false,
  product: [],
  error: '',
};

const productReducer = (state = initialProduct, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        product: [],
        error: null,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload.products,
        error: null,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        product: [],
        error: action.payload,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        product: [action.payload, ...state.product],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        product: state.product.filter((item) => item.ID_Product !== action.payload),
      };
    case UPDATE_PRODUCT: {
      const { id, data } = action.payload;
      const idx = state.product.findIndex((item) => item.ID_Product === id);
      state.product[idx] = {
        ...state.product[idx],
        ...data,
      };
      return state;
    }

    default:
      return state;
  }
};

export default productReducer;
