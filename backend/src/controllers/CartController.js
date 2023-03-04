import db from '../models/index.js';
import { Op } from 'sequelize';

const cartController = {
    async getCart(req, res) {
        try {
            const { Products } = await db.User.findOne({
                where: {ID_User: req.user.id},
                attributes: ['ID_User'],
                include: [{
                    model: db.Product,
                    through: { attributes: ['quantity'] },
                    include: [db.Image]
                }]
            })

            let sum_quantity = 0;
            Products.forEach((product) => {
                sum_quantity += product.carts.dataValues.quantity;
            });

            const FormatProducts = Products.map((product) => {
                const {quantity, carts, ...newproduct} = product;
                const tmp = newproduct.dataValues;
                delete tmp.carts;
                return {
                    ...tmp,
                    stock: quantity,
                    quantity: carts.dataValues.quantity,
                }
            });

            return res.status(200).json({
                isError: false,
                sum_quantity,
                Products: FormatProducts,
            });
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async addProductToCart(req, res) {
        try {
            if (!req.body.ID_Product || !req.body.quantity)
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })

            const product = await db.Product.findOne({
                where: {ID_Product: req.body.ID_Product}
            });

            if (product.quantity < req.body.quantity)
                return res.status(500).json({
                    isError: true,
                    message: 'Not enough product in store'
                })

            const cartItem = await db.Cart.findOne({
                where: {
                    [Op.and]: [
                        {ID_User: req.user.id},
                        {ID_Product: req.body.ID_Product}
                    ]
                }
            })

            if (!cartItem) {
                await db.Cart.create({
                    ID_User: req.user.id,
                    ID_Product: req.body.ID_Product,
                    quantity: req.body.quantity
                })
            }
            else {
                await db.Cart.update({
                    quantity: req.body.quantity
                },
                {
                    where: {
                        [Op.and]: [
                            {ID_User: req.user.id},
                            {ID_Product: req.body.ID_Product}
                        ]
                    }
                })
            }

            return res.status(200).json({
                isError: false,
                message: 'Add product to cart successfully'
            })
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async deleteProductFromCart(req, res) {
        try {
            if (!req.body.ID_Product)
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })

            const ids = req.body.ID_Product;

            ids.forEach(async (id) => {
                await db.Cart.destroy({ 
                    where: {
                        [Op.and]: [
                            {ID_User: req.user.id},
                            {ID_Product: id}
                        ]
                    }
                });
            })
            
            return res.status(200).json({
                isError: false,
                message: 'Delete product from cart successfully'
            })
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async deleteCart(req, res) {
        try {
            await db.Cart.destroy({ 
                where: {ID_User: req.user.id}
            });

            return res.status(200).json({
                isError: false,
                message: 'Delete cart successfully'
            })
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async getCartInfo(userId) {
        try {
            const { Products } = await db.User.findOne({
                where: {ID_User: userId},
                attributes: ['ID_User'],
                include: {
                    model: db.Product,
                    through: { attributes: ['quantity'] } 
                }
            })
            if (Products.length == 0) return false;
            return Products;
        } catch (error) {
            return false;
        }
    },

    async setEmptyCart(userId) {
        try {
            await db.Cart.destroy({ 
                where: {ID_User: userId}
            });

            return true;
        } catch (error) {
            return false;
        }
    },
}

export default cartController;