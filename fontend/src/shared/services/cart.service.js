const { default: appAPI } = require('../utils/appAPI');

class CartService {
  getCart = () => {
    return appAPI().get('/cart/getCart', { withCredentials: true });
  };

  addProductToCart = (id, quantity) => {
    return appAPI().post(
      '/cart/addProductToCart',
      { ID_Product: id, quantity },
      { withCredentials: true },
    );
  };

  deleteProductFromCart = (id) => {
    return appAPI().delete('/cart/deleteProductFromCart', {
      data: { ID_Product: [id] },
      withCredentials: true,
    });
  };

  checkout = () => {
    return appAPI().post('/order/checkout', {}, { withCredentials: true });
  };
}

export default new CartService();
