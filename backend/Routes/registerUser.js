const express = require("../node_modules/express");
const router = express.Router();
const userSchema = require("../Models/UserModel");

router.post("/addUSER", async (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }
  let user = await userSchema.findOne({ username: req.body.username });
  if (user) {
    res.status(400).send("That user already exisits!");
    console.log("User already exisits");
  } else {
    user = new userSchema({
      username: req.body.username,
      password: req.body.password,
      usernameSwitch: req.body.usernameSwitch,
    });
    await user.save();
    res.status(200).send("User registered");
    console.log("User successful registered");
  }
});

module.exports = router;
