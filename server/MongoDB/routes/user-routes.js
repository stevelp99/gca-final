const express = require("express");
const router = express.Router();
const User = require("../db/models/user-models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secret } = require("../config");

//Registration Route
router.post("/register", (req, res) => {
  const { email, password, username } = req.body;
  let newUser = new User({
    email,
    password,
    username
  });
  newUser
    .save()
    .then(user => {
      if (!user) {
        return res.status(400).send();
      }
      return res.status(201).send(user);
    })
    .catch(err => {
      if (err) {
        return res.status(400).send({ error: err });
      }
      return res.status(400).send();
    });
});

//Login Route && Verification
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then(user => {
      if (!user) {
        return res.status(400).send();
      }
      bcrypt
        .compare(password, user.password)
        .then(match => {
          if (!match) {
            return res.status(401).send();
          }
          let token = jwt.sign({ _id: user._id }, secret);
          return res
          ///returns token
          .send({token})

          ///Use of header for json tokens
        // .status(201)
        // .header('x-auth', token)
        // .send();
        })
        .catch(err => {
          return res.status(401).send({ error: err });
        });
    })
    .catch(err => {
      if (err) {
        return res.status(401).send(err);
      }
      return res.status(401).send();
    });
});



module.exports = router;