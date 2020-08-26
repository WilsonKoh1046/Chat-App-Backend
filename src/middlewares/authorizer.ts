import * as JWT from "jsonwebtoken";
import Claims from "../models/Claims";
import { 
    jwtSecret
 } from "../config/configuration";
 import { 
     Request,
     Response,
     NextFunction
  } from "express";

export default async (req:Request, res: Response, next: NextFunction) => {
    let token = req.header("Authorization");

    if (!token) {
        res.status(501).json({"Message": "Access denied"});
    }

    const validateToken = (provided_token: string): Promise<Claims> => {
        return new Promise((resolve, reject) => {
            JWT.verify(provided_token, jwtSecret, (err, decodedToken: Claims) => {
                if (err) {
                    reject(err);
                }
                resolve(decodedToken);
            });
        })
    }

    try {
        let decodedToken = await validateToken(token);
        req.id = decodedToken.id;
        next();
    } catch(err) {
        res.status(501).json({"Message": "Invalid token"});
    }
 }