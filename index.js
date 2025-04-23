const express = require("express");
const mongoose = require("mongoose");
const fileRouter = require("./routes/fileRoutes");
require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const app = express();
app.use(express.json());

app.use("/", fileRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to db successfully"))
  .catch((err) => console.log(err, "Error in connecting to db"));

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error in Listening to Port : ${PORT}`);
  }
  console.log(` Listening to Port : ${PORT}`);
});
