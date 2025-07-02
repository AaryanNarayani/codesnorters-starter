require('dotenv').config();
import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import session from 'express-session';
import passport from 'passport';
import authRouter from "./routes/auth";
import userRouter from "./routes/user";
import './middlewares/googleMiddleware';

const app = express();
const port = 3000;
const JWT_SECRET = process.env.JWT_SECRET || "jwtsecret123";

app.use(session({
    secret: JWT_SECRET as string, 
    resave: false,
    saveUninitialized: true,
}));
app.use(cors());
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.get('/health',(req: Request,res:Response) => {
    try{
    res.json({
        health: "All systems working correctly"
    })
    }catch(e){
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);

app.listen(port,()=>{
    console.log(`Listening on port : ${port}`);
})