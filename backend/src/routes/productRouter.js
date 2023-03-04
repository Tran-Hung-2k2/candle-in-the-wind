import express from 'express';
import productController from '../controllers/ProductController.js';
import authMiddleware from '../middleware/AuthMiddleware.js';
import multer from 'multer';

const DIR = './public';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, Date.now().toString() + fileName)
    }
});
const upload = multer({
    storage: storage,
});

const productRouter = express.Router();

productRouter.get('/getAllCategory', productController.getAllCategory);
productRouter.post('/addNewCategory', authMiddleware.verifyAdmin, productController.addNewCategory);

productRouter.get('/getAllProduct', productController.getAllProduct);
productRouter.get('/getProductByID/:id', productController.getProductByID);
productRouter.get('/searchProduct', productController.searchProduct);
productRouter.post('/addNewProduct', [authMiddleware.verifyAdmin, upload.array('productImages', 10)], productController.addNewProduct);
productRouter.post('/updateProduct', authMiddleware.verifyAdmin, productController.updateProduct);
productRouter.delete('/deleteProduct', authMiddleware.verifyAdmin, productController.deleteProduct);

export default productRouter;
