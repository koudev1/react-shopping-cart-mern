const express = require("express");
const mongoose = require("mongoose");
const bodyPatser = require("body-parser");
const router = require("./routes/routes");

const app = express();
app.use(bodyPatser.json());
app.use("/", router);

const connectionString = "mongodb://127.0.0.1/react-shopping-cart";
mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((res) => console.log("connection Done"));

app.listen(5001, () => {
    console.log("Running on Port 5001");
});
