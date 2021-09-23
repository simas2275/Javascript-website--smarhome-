const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const curtainsSchema = require("../../Models/CurtainsModel");

router.get("/", async (req, res) => {
  const item = await curtainsSchema.findOne({
    name: "Bathroom",
  });
  return res.json(item);
});

router.post("/add", async (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }
  curtains = new curtainsSchema({
    curtains: req.body.curtains,
    name: req.body.name,
  });
  await curtains.save();
  res.status(200).send("curtains registered");
  console.log("curtains successful registered");
});

router.put("/update/:id", (req, res) => {
  curtainsSchema
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
