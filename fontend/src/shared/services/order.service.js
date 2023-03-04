const { default: appAPI } = require('../utils/appAPI');

class OrderService {
  getOrderUser = () => {
    return appAPI().get('/order/getOrder', { withCredentials: true });
  };

  getAllOrder = () => {
    return appAPI().get('/order/getAllOrder', { withCredentials: true });
  };
}

export default new OrderService();
