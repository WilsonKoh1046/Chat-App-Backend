export default interface User {
    id?: string, // ? for optional, come handy when used for create user
    name: string,
    password?: string,
    email: string
}
