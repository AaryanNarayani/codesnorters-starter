require('dotenv').config();
import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import authRouter from "./routes/auth";
import userRouter from "./routes/user";


const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());


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