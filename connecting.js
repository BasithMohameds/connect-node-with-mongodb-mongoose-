const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const learn = require("./connectschema");

const app = express();
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/learning", () => {
  console.log("DB connected.....!");
});

//save todoList data
app.post("/add", async (req, res) => {
  const user = new learn({ name: req.body.name });
  const usersave = await user.save();
  res.send(usersave);
});

app.listen(3000, () => {
  console.log("Server Started...!");
});
