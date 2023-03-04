import express from 'express';
import forumController from '../controllers/forumController.js';
import authMiddleware from '../middleware/AuthMiddleware.js';

const forumRouter = express.Router();

forumRouter.get('/getpost', forumController.getAllPost);

forumRouter.get('/mypost', authMiddleware.verifyUser, forumController.getMyPost);
forumRouter.post('/createpost', authMiddleware.verifyUser, forumController.createPost);
forumRouter.patch('/updatepost', authMiddleware.verifyUser, forumController.updatePost);
forumRouter.delete('/deletepost', authMiddleware.verifyUser, forumController.deletePost);

forumRouter.post('/createcomment', authMiddleware.verifyUser, forumController.createComment);
forumRouter.patch('/updatecomment', authMiddleware.verifyUser, forumController.updateComment);
forumRouter.delete('/deletecomment', authMiddleware.verifyUser, forumController.deleteComment);

forumRouter.get('/getpending', authMiddleware.verifyAdmin, forumController.getPending);
forumRouter.patch('/acceptpost', authMiddleware.verifyAdmin, forumController.acceptPost);
forumRouter.delete('/admindeletepost', authMiddleware.verifyAdmin, forumController.adminDeletePost);
forumRouter.delete('/admindeletecomment', authMiddleware.verifyAdmin, forumController.adminDeleteComment);


export default forumRouter;