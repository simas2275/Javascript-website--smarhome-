const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const energySchema = require("../../Models/Electricity/energyModel");

router.get("/", async (req, res) => {
  const item = await energySchema.findOne({
    name: "Energy",
  });
  return res.json(item);
});

router.post("/add", async (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }
  energy = new energySchema({
    usagekWh: req.body.usagekWh,
    name: req.body.name,
  });
  await energy.save();
  res.status(200).send("energy registered");
  console.log("energy successful registered");
});

module.exports = router;
