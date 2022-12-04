import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';

import ApiRouter from "./server/routes/router.js";

dotenv.config();
const app = express()
const port = process.env.PORT || 5555

app.use(express.json());
app.use(cors())

app.use('/', express.static('dist'));

app.use("/api",ApiRouter);


app.listen(port,() =>
{
    console.log(`Server is running on port ${port}`);
})

