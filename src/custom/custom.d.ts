declare namespace Express { // override the library
    export interface Request {
        id?: string // add id (optional) here so we can attach the user id from decoded token 
    }
}