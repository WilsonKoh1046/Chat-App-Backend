import * as bcrypt from "bcrypt";

export default async (hashed_password: string, plain_password: string): Promise<boolean> => {
    try {
        return await bcrypt.compare(plain_password, hashed_password);
    } catch(err) {
        console.log(err);
    }
}