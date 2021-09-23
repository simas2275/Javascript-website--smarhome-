const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const plantSchema = require("../../Models/PlantWateringModel");

// router.get('/', (req, res) => {
//     plantSchema.findOne({
//         name : `Kitchen`
//     })
//       .then(plants =>{
//         return res.json()}).then(plantsParsed => {
//             console.log(plantsParsed);            console.log(plantsParsed.plants)
//             console.log(plantsParsed.plantsSwitch)
//         })

//       .catch(err => res.status(400).json('Error: ' + err));
//   });
router.get("/", async (req, res) => {
  const item = await plantSchema.findOne({
    name: "Kitchen",
  });
  return res.json(item);

  // console.log(parsed)
  // console.log(await res.json(item));
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

// router.put('/update/:id', (req, res, next) =>{

//     plantSchema.findByIdAndUpdate({_id: req.params.id}, req.body)
//     .then(function(){
//         plantSchema.findOne({_id: req.params.id})
//         .then(function(plantss){

//             res.status(200).send(plantss)
//             plants.save();
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
