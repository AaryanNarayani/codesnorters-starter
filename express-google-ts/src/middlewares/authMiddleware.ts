import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const authMiddleware = async (req:Request, res:Response,  next: NextFunction) => {
  try {
    const authorization = req.header('Authorization');
    if (!authorization || !authorization.startsWith('Bearer ')) {
      res.status(401).json(
        { message: 'Unauthorized' },
      );
    }

    const token = authorization!.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    req.userId = decoded.id;
    next();
  } catch (e: any) {
    if (e.name === 'TokenExpiredError') {
      res.status(401).json({ message: 'Token expired' });
    }
    console.error('Error Authenticating the User (middleware):', e);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default authMiddleware;