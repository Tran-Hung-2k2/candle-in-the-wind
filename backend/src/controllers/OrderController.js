import db from '../models/index.js';
import cartController from './CartController.js';
import voucherController from './VoucherController.js';

const orderController = {
    async getAllOrder(req, res) {
        try {
            const Orders = await db.Order.findAll({
                include: [{
                    model: db.User
                }, {
                    model: db.Product,
                    through: { attributes: ['quantity'] },
                }]
            });

            Orders.forEach((order) => {
                const products = order.dataValues.Products;
                products.forEach((product) => {
                    const stock = product.dataValues.quantity;
                    const quantity = product.dataValues.order_details.dataValues.quantity;
                    product.dataValues.quantity = quantity;
                    product.dataValues.stock = stock;
                    delete product.dataValues.order_details;
                })
            })

            return res.status(200).json({
                isError: false,
                Orders
            });
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async getOrder(req, res) {
        try {
            const { Orders } = await db.User.findOne({
                where: {ID_User: req.user.id},
                attributes: ['ID_User'],
                include: [{
                    model: db.Order,
                    include: [{
                        model: db.Product,
                        through: { attributes: ['quantity'] },
                    }]
                }]
            });
            
            Orders.forEach((order) => {
                const products = order.dataValues.Products;
                products.forEach((product) => {
                    const stock = product.dataValues.quantity;
                    const quantity = product.dataValues.order_details.dataValues.quantity;
                    product.dataValues.quantity = quantity;
                    product.dataValues.stock = stock;
                    delete product.dataValues.order_details;
                });
            })

            return res.status(200).json({
                isError: false,
                Orders
            });
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async checkout(req, res) {
        try {
            const products = await cartController.getCartInfo(req.user.id);

            if (!products)
                return res.status(500).json({
                    isError: true,
                    message: 'Cart is empty'
                })
                
            let total = 0;
            products.forEach((product) => {
                if (product.carts.dataValues.quantity > product.quantity) {
                    return res.status(500).json({
                        isError: true,
                        message: 'Not enough product in store'
                    })
                }
                else
                    total += (product.price - product.discount) * product.carts.dataValues.quantity;
            })

            // Add voucher
            if (req.body.ID_Voucher) {
                const isValid = await voucherController.handleValidVoucher(req.body.ID_Voucher, req.user.id);
                if (isValid)
                {
                    total -= isValid.value;
                    if (total < 0) total = 0;
                }
                else {
                    return res.status(500).json({
                        isError: true,
                        message: 'Voucher is invalid'
                    })
                }
            }

            const order = await db.Order.create({
                ID_User: req.user.id,
                total_money: total
            })
            
            products.forEach(async (product) => {
                await db.Order_Detail.create({
                    ID_Order: order.ID_Order,
                    ID_Product: product.ID_Product,
                    quantity: product.carts.dataValues.quantity
                })

                await db.Product.update({
                    quantity: product.quantity - product.carts.dataValues.quantity
                },
                {
                    where: {ID_Product: product.ID_Product}
                });
            })

            cartController.setEmptyCart(req.user.id);
            return res.status(200).json({
                isError: false,
                order
            });
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },
}

export default orderController;