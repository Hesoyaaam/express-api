const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

const productController = require("./product/producr.controller");

app.use("/products", productController);

app.get("/api", (req,res) => {
    res.send("HAI!!!");
});

app.listen(PORT, () => {
    console.log("Express APi running in port: " + PORT);
});