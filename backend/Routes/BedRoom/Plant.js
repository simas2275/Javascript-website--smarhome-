const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const plantSchema = require("../../Models/PlantWateringModel");

router.get("/", async (req, res) => {
  const item = await plantSchema.findOne({
    name: "Bedroom",
  });
  return res.json(item);
});

router.post("/add", async (req, res) => {
  //req.body
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }
  plants = new plantSchema({
    plants: req.body.plants,
    plantsSwitch: req.body.plantsSwitch,
    name: req.body.name,
  });
  await plants.save();
  res.status(200).send("plants registered");
  console.log("plants successful registered");
});

router.put("/update/:id", (req, res) => {
  plantSchema
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
