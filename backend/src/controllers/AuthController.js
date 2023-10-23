import bcrypt from 'bcrypt';
import emailValidator from 'email-validator';
import jwt from 'jsonwebtoken';
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
                expiresIn: '3d',
            },
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
                expiresIn: '365d',
            },
        );
    },

    // [POST] /auth/register
    async register(req, res) {
        try {
            // Destructure fields from request body
            const { fullname, email, password, phone_number, address } = req.body;

            // Check if required fields are present
            if (!fullname || !email || !password || !phone_number) {
                return res.status(400).json({
                    isError: true,
                    message: 'Missing required field',
                });
            }

            // Validate email using email-validator library
            if (!emailValidator.validate(email)) {
                return res.status(400).json({
                    isError: true,
                    message: 'Email is invalid',
                });
            }

            // Check if email already exists in database
            const dbUser = await db.User.findOne({ where: { email } });
            if (dbUser) {
                return res.status(400).json({
                    isError: true,
                    message: 'Email is already existed',
                });
            }

            // Generate salt and hash password using bcrypt library
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create new user in database
            const user = await db.User.create({
                ID_Role: 2,
                fullname,
                email,
                phone_number,
                address,
                password: hashedPassword,
            });

            // Return success response with newly created user object
            return res.status(201).json({
                isError: false,
                user,
                message: 'Register Successfully',
            });
        } catch (error) {
            // Log error and return error response
            console.error(error);
            return res.status(500).json({ isError: true });
        }
    },

    // [POST] /auth/login
    async login(req, res) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({
                    isError: true,
                    message: 'Missing required field',
                });
            }

            const user = await db.User.findOne({
                where: { email },
            });

            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({
                    isError: true,
                    message: 'Wrong username or password',
                });
            }

            const accessToken = authController.generateAccessToken(user);
            const refreshToken = authController.generateRefreshToken(user);
            res.cookie('accessToken', accessToken, {
                httpOnly: true,
            });
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
            });
            return res.status(200).json({
                isError: false,
                message: 'Login Successfully',
                user: user,
                accessToken,
            });
        } catch (error) {
            return res.status(500).json({ isError: true });
        }
    },

    // [POST] /auth/refreshToken
    async refreshToken(req, res) {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken)
            return res.status(401).json({
                isError: true,
                message: 'Please login to continue',
            });
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                return res.status(403).json({
                    isError: true,
                    message: 'Token is invalid',
                });
            }
            const newAccessToken = authController.generateAccessToken({
                ID_User: user.id,
                ID_Role: user.role,
            });
            const newRefreshToken = authController.generateAccessToken({
                ID_User: user.id,
                ID_Role: user.role,
            });
            res.cookie('accessToken', newAccessToken, {
                httpOnly: true,
            });
            res.cookie('refreshToken', newRefreshToken, {
                httpOnly: true,
            });
            return res.status(200).json({
                isError: false,
                message: 'Refresh token successfully',
            });
        });
    },

    // [POST] /auth/logout
    async logout(req, res) {
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        return res.status(200).json({
            isError: false,
            message: 'Logout Successfully',
        });
    },
};

export default authController;
