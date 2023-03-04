import authRouter from "./authRouter.js";
import productRouter from "./productRouter.js";
import cartRouter from "./cartRouter.js";
import orderRouter from "./orderRouter.js";
import voucherRouter from "./voucherRouter.js";
import forumRouter from "./forumRouter.js"

export default (app) => {
    app.use('/auth', authRouter);
    app.use('/product', productRouter);
    app.use('/cart', cartRouter);
    app.use('/order', orderRouter);
    app.use('/voucher', voucherRouter);
    app.use('/forum', forumRouter);
};