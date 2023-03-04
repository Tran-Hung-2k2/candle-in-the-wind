import express from 'express';
import cartController from '../controllers/CartController.js';
import authMiddleware from '../middleware/AuthMiddleware.js';
const cartRouter = express.Router();

cartRouter.get('/getCart', authMiddleware.verifyUser, cartController.getCart);
cartRouter.post('/addProductToCart', authMiddleware.verifyUser, cartController.addProductToCart);
cartRouter.delete('/deleteProductFromCart', authMiddleware.verifyUser, cartController.deleteProductFromCart);
cartRouter.delete('/deleteCart', authMiddleware.verifyUser, cartController.deleteCart);

export default cartRouter;
