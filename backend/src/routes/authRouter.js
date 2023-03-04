import express from 'express';
import authController from '../controllers/AuthController.js';
import authMiddleware from '../middleware/AuthMiddleware.js';
const authRouter = express.Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);
authRouter.post('/refreshToken', authController.refreshToken);

// Example: How to use authMiddleware

// authRouter.get('/test_middleware_user', authMiddleware.verifyAdmin, (req, res) => {
//     return res.status(200).json(req.user.id);
// })

// If you want to get current logged in user id, take in req.user.id 
// If you want to check logged in as admin, use authMiddleware.verifyAdmin instead of authMiddleware.verifyUser

export default authRouter;
