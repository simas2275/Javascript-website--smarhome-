const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const lightSchema = require("../../Models/LightModel");

router.get("/", async (req, res) => {
  const item = await lightSchema.findOne({
    name: "Bathroom",
  });
  return res.json(item);
});

router.post("/add", async (req, res) => {
  //req.body
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }
  light = new lightSchema({
    light: req.body.light,
    name: req.body.name,
  });
  await light.save();
  res.status(200).send(" light registered");
  console.log("light successful registered");
});

router.put("/update/:id", (req, res) => {
  lightSchema
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
