const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const temperatureSchema = require("../../Models/TemperatureModel");

router.get("/", async (req, res) => {
  const item = await temperatureSchema.findOne({
    name: "Kitchen",
  });
  return res.json(item);
});

router.post("/add", async (req, res) => {
  //req.body
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }
  temperature = new temperatureSchema({
    temperature: req.body.temperature,
    name: req.body.name,
  });
  await temperature.save();
  res.status(200).send("temperature registered");
  console.log("temperature successful registered");
});

router.put("/update/:id", (req, res) => {
  temperatureSchema
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

// router.put('/update/:id', (req, res, next) =>{

//     temperatureSchema.findByIdAndUpdate({_id: req.params.id}, req.body)
//     .then(function(){
//         temperatureSchema.findOne({_id: req.params.id})
//         .then(function(Temperatures){

//             res.status(200).send(Temperatures)
//             Temperature.save();
//         })
//     });
// })

// router.post('/update/:id', (req, res) => {
//     Exercise.findById(req.params.id)
//       .then(exercise => {
//         exercise.username = req.body.username;
//         exercise.description = req.body.description;
//         exercise.duration = Number(req.body.duration);
//         exercise.date = Date.parse(req.body.date);

//         exercise.save()
//           .then(() => res.json('Exercise updated!'))
//           .catch(err => res.status(400).json('Error: ' + err));
//       })
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

module.exports = router;
