import express from "express";
import userServices from "../services/user";
const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {
    try {
        let result = await userServices.retrieveAll();
        res.status(result.Status).json(result.Data);
    } catch(err) {
        res.status(500).json({"Message": "Server error"});
    }
});

router.post('/', async (req: express.Request, res: express.Response) => {
    const { name, password, email } = req.body;
    try {
        let result = await userServices.create({name, password, email});
        res.status(result.Status).json({"Message": result.Message});
    } catch(err) {
        res.status(500).json({"Message": "Server error"});
    }
})

export default router;