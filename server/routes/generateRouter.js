import express from "express";
import EmailerController from "../controllers/EmailerController.js";

const router = express.Router();

router.post('/',EmailerController.post);
  

export default router;