const {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} = require('./product.type');

const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

const fetchProductSuccess = (product) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
  };
};

const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  };
};

const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    payload: product,
  };
};

const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};

const updateProduct = (id, data) => {
  return {
    type: UPDATE_PRODUCT,
    payload: {
      id: id,
      data: data,
    },
  };
};

export {
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductFailure,
  createProduct,
  deleteProduct,
  updateProduct,
};
