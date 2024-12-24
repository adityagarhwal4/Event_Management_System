import express from 'express'
import dotenv from 'dotenv';
import cors from "cors";
import cookieParser from "cookie-parser"

dotenv.config();

const app = express();

const frontendUri = process.env.FRONTEND_URI!;

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use(
    cors({
        credentials: true,
        origin: [
            frontendUri,
        ],
    })
);

app.use("/api/v1/user", () => { });

export default app;