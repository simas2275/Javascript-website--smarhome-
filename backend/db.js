const mongoose = require("mongoose");
const config = require("config");
const url = config.get("MONGO_URL");
const express = require("express");

const app = express();
const connectDB = async () => {
  console.log("Connecting to: ", url);
  await mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected..!");
};

module.exports = connectDB;
