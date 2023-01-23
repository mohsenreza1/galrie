import dotenv from "dotenv"
dotenv.config()
import express from "express";
const app = express();

import photos from "./router/photos.js"



const port = process.env.PORT || 4009
app.listen(port, () =>console.log(`listing on port  ${port}`));



app.use(express.json());
app.use("/photos",photos)