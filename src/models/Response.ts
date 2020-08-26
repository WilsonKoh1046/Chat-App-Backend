import User from "./User";

export default interface Response {
    Status: number,
    Message?: string,
    Data?: Array<User>
}