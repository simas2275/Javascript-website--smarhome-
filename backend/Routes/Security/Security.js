const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const securitySchema = require("../../Models/securityModel");

router.get("/", async (req, res) => {
  const item = await securitySchema.findOne({
    name: "security",
  });
  return res.json(item);
});

router.post("/add", async (req, res) => {
  //req.body
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }
  security = new securitySchema({
    securitySwitch: req.body.securitySwitch,
    name: req.body.name,
  });
  await security.save();
  res.status(200).send("security registered");
  console.log("security successful registered");
});

router.put("/update/:id", (req, res) => {
  securitySchema
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
