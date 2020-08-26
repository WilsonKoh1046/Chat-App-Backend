import DB from "../config/db";
import User from "../models/User";
import Response from "../models/Response";
import passwordHasher from "../utils/passwordHasher";

class UserSevices {
    constructor() {}

    create = async (user: User): Promise<Response> => {
        try {   
            let hashed_password = await passwordHasher(user.password);
            let result = await DB.query(
                `insert into users (id, name, password, email)
                values (gen_random_uuid(), '${user.name}', '${hashed_password}', '${user.email}')
                returning *`
                );
            let response: Response = {
                "Status": 201,
                "Message": `User with email ${result.rows[0].email} is created`
            };
            return response;
        } catch(err) {
            console.log(err);
        }
    }

    retrieveAll = async (): Promise<Response> => {
        try {
            let result = await DB.query("select id, name, email from users");
            let response: Response = {
                "Status": 200, "Data": result.rows
            };
            return response;
        } catch(err) {
            console.log(err);
        }
    }
}

export default new UserSevices();