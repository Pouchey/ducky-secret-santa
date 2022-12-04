import express from "express";
import GenerateRouter from "./generateRouter.js";
const router = express.Router();



router.use('/emailer',GenerateRouter);

router.get('/espresso', (req, res) => {
    res.status(418).send("I'm a teapot");
});

export default router;