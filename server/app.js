const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const brcypt = require("bcrypt");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgresql://localhost:5432/gcausers");
const saltRounds = 10;app.use(bodyParser.json());app.use(cors());
app.get("/", (req, res) => {
  res.send("This is a user route");
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to PostgreSQL");
  })
  .catch(err => {
    console.error("Failed to connect to PostgreSQL:", err);
  });const account = sequelize.define("account", {
  email: { type: Sequelize.TEXT },
  password: { type: Sequelize.TEXT }
});account.sync({ force: false }).then(() => {
  console.log("Table created!");
});// app.get("/user", function(req, res) {
//   account.User.findOne({
//     where: {
//       email: req.body.email
//     }
//   }).then(function(user){
//     if(!user){
//       res.send("Invalid account")
//     } else {
//       brcypt.compare(req.body.password, user.password, function(err, result) {
//         if (result === true){
//           res.redirect('/home')
//         } else {
//           res.send('Invalid password');
//           res.redirect('/')
//         }
//       })
//     }
//   })
// Posted to Postgres local server
app.post("/data/create", (req, res) => {
  brcypt.hash(req.body.password, saltRounds, function(err, hash) {
    account
      .create({
        email: req.body.email,
        password: hash
      })
      .then(data => {
        console.log(data);
        res.send({
          status: "Success",
          email: req.body.email,
          password: req.body.password
        });
      });
  });
});app.listen(3000, () => {
  console.log("Server @port 3000 !");
});