import * as bcrypt from "bcrypt";
import { saltRound } from "../config/configuration";

export default async (user_password: string): Promise<string> => {
    try {
        let salt = await bcrypt.genSalt(saltRound);
        let hashed_password = await bcrypt.hash(user_password, salt);
        return hashed_password;
    } catch(err) {
        console.log(err);
    }
}