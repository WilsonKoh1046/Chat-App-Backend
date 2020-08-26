import * as dotenv from "dotenv";
dotenv.config();

// Env
export const environment = process.env.ENVIRONMENT;

// DB
export const dbUser: string = process.env.DBUSER;
export const dbHost: string = process.env.DBHOST;
export const dbDatabase: string = process.env.DBDATABASE;
export const dbPassword: string = process.env.DBPASSWORD;
export const dbPort: number = parseInt(process.env.DBPORT);

// JWT
export const jwtSecret: string = process.env.JWTSECRET;
export const jwtExpiresIn: string = process.env.JWTEXPIRESIN;

// Bcrypt
export const saltRound: number = parseInt(process.env.BCRYPTSALTROUND);
