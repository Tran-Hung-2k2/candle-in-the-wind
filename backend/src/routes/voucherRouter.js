import express from 'express';
import voucherController from '../controllers/VoucherController.js';
import authMiddleware from '../middleware/AuthMiddleware.js';
const voucherRouter = express.Router();

voucherRouter.get('/getAllVoucher', authMiddleware.verifyAdmin, voucherController.getAllVoucher);
voucherRouter.get('/getUserVoucher', authMiddleware.verifyUser, voucherController.getUserVoucher);
voucherRouter.post('/createVoucher', authMiddleware.verifyAdmin, voucherController.createVoucher);
voucherRouter.delete('/deleteVoucher', authMiddleware.verifyAdmin, voucherController.deleteVoucher);

export default voucherRouter;
