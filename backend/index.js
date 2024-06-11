import express from "express";
import cors from "cors";
import pool from "./db.js";
const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})