import express from "express";
import pool from "./common/dbConfig";
import { reqInfo } from "./common/types";
import { executeSql } from "./common/initDb";
const app = express();

// middleware
app.use(express.json());

// routes
app.post("/todos", async(req, res) => {
    try {
        const description: reqInfo = req.body;
        console.log(req.body);
    } catch (err: any) {
        console.error(err.message);
    }

    return ;
})


app.listen(5000, () => {
    console.log("Server listening on port 5000");
    executeSql().catch(err => console.error('Unexpected error', err.stack));
});


