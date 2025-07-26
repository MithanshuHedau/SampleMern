const express = require("express");
const dataUser = require("../model/dataUser");
const {
  AddUser,
  allUser,
  singleUser,
  editUser,
  deleteUser,
} = require("../controller/user");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.send("User route is working");
});

Router.post("/add", AddUser);
Router.get("/allUser", allUser);
Router.get("/:id", singleUser);
Router.put("/edit/:id", editUser);
Router.delete("/delete/:id", deleteUser);

module.exports = Router;
