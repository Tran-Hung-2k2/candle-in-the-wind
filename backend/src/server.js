import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import route from './routes/index.js';

dotenv.config();
const app = express();

app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'))

route(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})