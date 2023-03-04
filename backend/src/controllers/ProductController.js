import db from '../models/index.js';
import { Op } from 'sequelize';

const productController = {
    async getAllCategory(req, res) {
        try {
            const categories = await db.Category.findAll();
            return res.status(200).json({
                isError: false,
                categories
            });
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async addNewCategory(req, res) {
        try {
            if (!req.body.name)
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })

            const category = await db.Category.create({
                name: req.body.name
            });

            return res.status(200).json({
                isError: false,
                category,
                message: 'Create category successfully'
            });
            
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async getAllProduct(req, res) {
        try {
            const products = await db.Product.findAll({
                include: [db.Category, db.Image]
            });
            return res.status(200).json({
                isError: false,
                products
            });
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async getProductByID(req, res) {
        try {
            const product = await db.Product.findOne({
                where: {ID_Product: req.params.id},
                include: [db.Category, db.Image]
            });
            return res.status(200).json({
                isError: false,
                product
            });
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async searchProduct(req, res) {
        try {
            const title = req.query.search ? req.query.search : '';
            const ID_Category = req.query.id_category ? req.query.id_category : '';

            const products = await db.Product.findAll({
                where: {
                    [Op.and]: [
                        {
                            title: {
                                [Op.like]: `%${title}%`
                            }
                        },
                        {
                            ID_Category: {
                                [Op.like]: `%${ID_Category}%`
                            }
                        },
                    ]
                },
                include: [db.Category, db.Image]
            });
            return res.status(200).json({
                isError: false,
                products
            });
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async addNewProduct(req, res) {
        try {
            if (!req.body.ID_Category || !req.body.title || !req.body.price)
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })

            if (req.body.discount)
            {
                if (parseInt(req.body.discount) > parseInt(req.body.price))
                    return res.status(500).json({
                        isError: true,
                        message: 'Price is invalid'
                    });
            }

            const product = await db.Product.create({
                ID_Category: req.body.ID_Category,
                title: req.body.title,
                price: req.body.price,
                discount: req.body.discount,
                quantity: req.body.quantity,
                description: req.body.description
            });

            if (req.files && req.files.length > 0) {
                for (let i = 0; i < req.files.length; ++i)
                {
                    await db.Image.create({
                        ID_Product: product.ID_Product,
                        content: 'http://localhost:8000/' + req.files[i].filename
                    })
                }
            }

            return res.status(200).json({
                isError: false,
                product,
                message: 'Create product successfully'
            })

        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async updateProduct(req, res) {
        try {
            if (!req.body.ID_Product)
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })

            const product = await db.Product.update({
                ID_Category: req.body.ID_Category,
                title: req.body.title,
                price: req.body.price,
                discount: req.body.discount,
                quantity: req.body.quantity,
                description: req.body.description
            },
            {
                where: {ID_Product: req.body.ID_Product}
            });

            return res.status(200).json({
                isError: false,
                message: 'Update product successfully'
            })

        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async deleteProduct(req, res) {
        try {
            if (!req.body.ID_Product)
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })

            const ids = req.body.ID_Product;
            ids.forEach(async (id) => {
                await db.Product.destroy({ where: {ID_Product: id}});
            })
            
            return res.status(200).json({
                isError: false,
                message: 'Delete product successfully'
            })

        } catch (error) {
            return res.status(500).json({isError:true});
        }
    }
}

export default productController;