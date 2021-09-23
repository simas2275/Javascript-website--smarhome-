const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const gatesSchema = require("../../Models/gatesModel");

router.get("/", async (req, res) => {
  const item = await gatesSchema.findOne({
    name: "Garage",
  });
  return res.json(item);
});

router.post("/add", async (req, res) => {
  //req.body
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }
  garage = new gatesSchema({
    garageSwitch: req.body.garageSwitch,
    name: req.body.name,
  });
  await garage.save();
  res.status(200).send("gate registered");
  console.log("gate successful registered");
});

router.put("/update/:id", (req, res) => {
  gatesSchema
    .findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      {
        new: true,
      }
    )
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
