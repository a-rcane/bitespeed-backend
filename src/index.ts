import express from "express";
import { executeSql } from "./common/initDb";
import contactRoute from './routes/contact';

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// sanity check
app.get("/", (req, res) => {
    res.send("Hello, world!");
});


app.use("/identify", contactRoute);

app.listen(5000, () => {
    console.log("Server listening on port 5000");
    executeSql().catch(err => console.error('Unexpected error', err.stack));
});


