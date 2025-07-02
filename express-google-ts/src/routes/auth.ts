import jwt from 'jsonwebtoken';
import express, { Request, Response } from 'express'
import passport from 'passport';
const authRouter = express.Router();


authRouter.get('/hello',(req:Request,res:Response)=>{
    try{
        res.status(200).json({
            message: "Hello from Auth Route"
        });
    }catch(e){
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
})

authRouter.post('/login', (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        // Here you would typically validate the user credentials by checking against a database
        if (username && password) {
            res.status(200).json({ message: "Login successful" });
        } else {
            res.status(400).json({ error: "Invalid credentials" });
        }
    } catch (e) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

authRouter.post('/register', (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        // Here you would typically save the user to a database
        if (username && password) {
            const token = jwt.sign({ id: username }, process.env.JWT_SECRET || "vimal123", { expiresIn: '1h' });
            res.status(201).json({ message: "User registered successfully", token: token });
        } else {
            res.status(400).json({ error: "Invalid input" });
        }
    } catch (e) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

authRouter.get("/google", passport.authenticate("google", { 
  scope: ["profile", "email"] 
}));

authRouter.get("/google/callback",
  passport.authenticate("google", { 
      failureRedirect: `${process.env.CLIENT_URL}/signup`,
      session: false 
  }),
  (req: any, res: Response) => {
      const { token } = req.user;
      res.redirect(`${process.env.CLIENT_URL}/google/redirect?token=${token}`);
  }
);

export default authRouter;