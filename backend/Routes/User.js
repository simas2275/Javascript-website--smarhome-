const express = require("../node_modules/express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const userSchema = require("../Models/UserModel");

router.get("/", (req, res) => {
  userSchema
    .find()
    .select("-password")
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/updateUSER", (req, res) => {
  if (!req.query.username) {
    res.status(400).send("Missing username");
  }
  userSchema
    .findOneAndUpdate(
      {
        username: req.query.username,
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

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password || username == null) {
    return res.status(400).send("Please fill all fields");
  }
  userSchema.findOne({ username }).then((user) => {
    if (!user) {
      res.status(400).send("User does not exists");
    }
    // validation password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).send("Invalid credentials");
      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              username: user.username,
            },
          });
        }
      );
    });
  });
});

//Fronte nenaudojam
router.delete("/remove", (req, res) => {
  if (!req.query.username) {
    return res.status(400).send("Missing URL parameter: ");
  }
  userSchema
    .findOneAndRemove({
      username: req.query.username,
    })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
