import express from 'express';
import orderController from '../controllers/OrderController.js';
import authMiddleware from '../middleware/AuthMiddleware.js';
const orderRouter = express.Router();

orderRouter.get('/getAllOrder', authMiddleware.verifyAdmin, orderController.getAllOrder);
orderRouter.get('/getOrder', authMiddleware.verifyUser, orderController.getOrder);
orderRouter.post('/checkout', authMiddleware.verifyUser, orderController.checkout);

export default orderRouter;
