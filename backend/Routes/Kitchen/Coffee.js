const express = require("express");
const router = express.Router();
const coffeeSchema = require("../../Models/coffeeModel");

router.get("/", async (req, res) => {
  const item = await coffeeSchema.findOne({
    name: "Kitchen",
  });
  return res.json(item);
});

router.post("/add", async (req, res) => {
  //req.body
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }
  coffee = new coffeeSchema({
    coffeeSwitch: req.body.coffeeSwitch,
    name: req.body.name,
  });
  await coffee.save();
  res.status(200).send("coffee registered");
  console.log("coffee successful registered");
});

router.put("/update/:id", (req, res) => {
  coffeeSchema
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
