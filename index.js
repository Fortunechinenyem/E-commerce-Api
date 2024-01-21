const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

app.get("/api/test", () => {
  console.log("testing my api endpoint!");
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Ecommerce api server is running!");
});
