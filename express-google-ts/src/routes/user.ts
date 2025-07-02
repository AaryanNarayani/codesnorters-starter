import express, { Request, Response } from 'express'
import authMiddleware from '../middlewares/authMiddleware';

const userRouter = express.Router();


userRouter.get('/hello', authMiddleware, (req:Request, res:Response) => {
    try {
        res.status(200).json({
            message: "Hello from User Route"
        });
    } catch (e) {
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

export default userRouter;