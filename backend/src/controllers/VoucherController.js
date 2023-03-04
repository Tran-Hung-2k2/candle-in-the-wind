import { Sequelize } from 'sequelize';
import { Op } from 'sequelize';
import db from '../models/index.js';

const voucherController = {
    async getAllVoucher(req, res) {
        try {
            const vouchers = await db.Voucher.findAll();
            return res.status(200).json({
                isError: false,
                vouchers
            });
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async getUserVoucher(req, res) {
        try {
            const { Vouchers } = await db.User.findOne({
                where: {ID_User: req.user.id},
                attributes: ['ID_User'],
                include: {
                    model: db.Voucher,
                }
            })
            return res.status(200).json({
                isError: false,
                Vouchers
            });
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async createVoucher(req, res) {
        try {
            if (!req.body.rank || !req.body.name || !req.body.value)
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })

            let total = 500000;
            if (req.body.rank == 'silver')
                total = 2000000;
            else if (req.body.rank == 'gold')
                total = 5000000;
            else if (req.body.rank == 'platinum')
                total = 10000000;
            
            const userList = await db.Order.findAll({
                attributes: ["ID_User"],
                group: "ID_User",
                having: Sequelize.literal(`sum(total_money) >= ${total}`),
            });

            const voucher = await db.Voucher.create({
                name: req.body.name,
                value: req.body.value,
            });

            for (const i in userList) {
                await db.Voucher_User.create({
                    ID_Voucher: voucher.ID_Voucher,
                    ID_User: userList[i].dataValues.ID_User
                });
            }

            return res.status(200).json({
                isError: false,
                message: 'Create voucher successfully'
            })
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async deleteVoucher(req, res) {
        try {
            if (!req.body.ID_Voucher)
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })

            await db.Voucher.destroy({ where: {ID_Voucher: req.body.ID_Voucher}});

            return res.status(200).json({
                isError: false,
                message: 'Delete voucher successfully'
            })
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async handleValidVoucher(voucherId, userId) {
        try {
            const check = await db.Voucher_User.findOne({
                where: {
                    [Op.and]: [
                        {ID_Voucher: voucherId},
                        {ID_User: userId}
                    ]
                }
            });
            if (!check) return false;
            const voucher = await db.Voucher.findOne({ where: {ID_Voucher: voucherId}});
            await check.destroy();
            return voucher;
        } catch (error) {
            return false;
        }
    },
}

export default voucherController;