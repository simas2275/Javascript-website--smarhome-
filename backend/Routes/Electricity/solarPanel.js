const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const solarSchema = require("../../Models/Electricity/solarModel");

router.get("/", async (req, res) => {
  const item = await solarSchema.findOne({
    name: "Solar",
  });
  return res.json(item);
});

router.post("/add", async (req, res) => {
  //req.body
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }
  solar = new solarSchema({
    inputPercent: req.body.inputPercent,
    inputkWh: req.body.inputkWh,
    outputPercent: req.body.outputPercent,
    outputkWh: req.body.outputkWh,
    name: req.body.name,
  });
  await solar.save();
  res.status(200).send("solar registered");
  console.log("solar successful registered");
});

module.exports = router;
