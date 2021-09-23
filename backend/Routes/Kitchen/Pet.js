const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const petSchema = require("../../Models/petModel");

router.get("/", async (req, res) => {
  const item = await petSchema.findOne({
    name: "Kitchen",
  });
  return res.json(item);
});

router.post("/add", async (req, res) => {
  //req.body
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }
  pet = new petSchema({
    petFood: req.body.petFood,
    petPortion: req.body.petPortion,
    name: req.body.name,
  });
  await pet.save();
  res.status(200).send("pet registered");
  console.log("pet successful registered");
});

router.put("/update/:id", (req, res) => {
  petSchema
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
