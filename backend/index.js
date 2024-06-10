import express from "express";
import cors from "cors";

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})