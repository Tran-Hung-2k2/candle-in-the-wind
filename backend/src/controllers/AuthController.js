import bcrypt from "bcrypt";
import emailValidator from "email-validator";
import jwt from "jsonwebtoken";
import db from '../models/index.js';

const authController = {
    generateAccessToken(user) {
        return jwt.sign(
            {
                id: user.ID_User,
                role: user.ID_Role,
            }, 
            process.env.JWT_ACCESS_KEY,
            {
                expiresIn: "3d"
            }
        );
    },
 
    generateRefreshToken(user) {
        return jwt.sign(
            {
                id: user.ID_User,
                role: user.ID_Role,
            }, 
            process.env.JWT_REFRESH_KEY,
            {
                expiresIn: "365d"
            }
        );
    },

    async register(req, res) {
        try {
            if (!req.body.fullname || !req.body.email || !req.body.password || !req.body.phone_number)
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })
            
            if (!emailValidator.validate(req.body.email))
                return res.status(500).json({
                    isError: true,
                    message: 'Email is invalid'
                })

            const dbUser = await db.User.findOne({
                where: {email: req.body.email}
            })

            if (dbUser)
                return res.status(500).json({
                    isError: true,
                    message: 'Email is already existed'
                })

            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            const user = await db.User.create({
                ID_Role: 2,
                fullname: req.body.fullname,
                email: req.body.email,
                phone_number: req.body.phone_number,
                address: req.body.address,
                password: hashed,
            })

            return res.status(200).json({
                isError: false,
                user,
                message: 'Register Successfully'
            });
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async login(req, res) {
        try {
            if (!req.body.email || !req.body.password)
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })

            const user = await db.User.findOne({
                where: {email: req.body.email}
            })

            if (!user)
                return res.status(500).json({
                    isError: true,
                    message: 'Wrong username or password'
                })

            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );

            if (validPassword)
            {
                const accessToken = authController.generateAccessToken(user);
                const refreshToken = authController.generateRefreshToken(user);
                res.cookie("accessToken", accessToken, {
                    httpOnly: true,
                });
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                });
                return res.status(200).json({
                    isError: false,
                    message: 'Login Successfully',
                    user: user,
                    accessToken,
                })
            }
            else
                return res.status(500).json({
                    isError: true,
                    message: 'Wrong username or password'
                })
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async refreshToken(req, res) {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json({
            isError: true,
            message: 'Please login to continue'
        });
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                return res.status(403).json({
                    isError: true,
                    message: 'Token is invalid'
                });
            }
            const newAccessToken = authController.generateAccessToken({
                ID_User: user.id,
                ID_Role: user.role
            });
            const newRefreshToken = authController.generateAccessToken({
                ID_User: user.id,
                ID_Role: user.role
            });
            res.cookie("accessToken", newAccessToken, {
                httpOnly: true,
            });
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
            });
            return res.status(200).json({
                isError: false,
                message: 'Refresh token successfully'
            });
        })
    },

    async logout(req, res) {
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        return res.status(200).json({
            isError: false,
            message: 'Logout Successfully'
        })
    },
}

export default authController;