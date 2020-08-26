import * as JWT from "jsonwebtoken";
import Claims from "../models/Claims";
import { 
    jwtSecret,
    jwtExpiresIn
 } from "../config/configuration";

export default async (user_id: string): Promise<string> => {
    const claims: Claims = {
        id: user_id
    }

    const expires = {
        expiresIn: jwtExpiresIn
    }

    const createJWT = (provided_claims: Claims): Promise<string> => {
        return new Promise((resolve, reject) => {
            JWT.sign(provided_claims, jwtSecret, expires, (err, token) => {
                if (err) {
                    reject(err);
                }
                resolve(token);
            })
        })
    }

    try {
        let token = await createJWT(claims);
        return token;
    } catch(err) {
        console.log(err);
    }
}