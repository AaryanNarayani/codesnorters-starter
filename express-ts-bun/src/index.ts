import express, { type Request, type Response } from 'express'
import cors from 'cors'

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.get('/health',(req:Request,res:Response)=>{
    try{
    res.status(200).json({
        message: "All things are working correctly"
    })
    }catch(e){
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})