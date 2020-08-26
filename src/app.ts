import express from "express";
import bodyParser from "body-parser";
import { environment } from "./config/configuration";
import user from "./routes/user";
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("The server is alive");
})

app.use("/api/users", user);

app.listen(port, () => {
    if (environment === "development") {
        console.log("Development");
    }
    console.log(`Server running at port ${port}`);
})