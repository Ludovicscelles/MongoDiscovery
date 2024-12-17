const express = require("express");
const mongoose = require("mongoose");
const wilderController = require("./wilder/wilder.controller.js");
const techController = require("./tech/tech.controller.js");

(async () => {
  const app = express();

  console.log("Connecting to MongoDB");
  await mongoose.connect("mongodb://mongodb:27017/tom", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connected");

  app.get("/", (req, res) => {
    console.log("Got a request");
    res.json({ message: "Hey, I'm Tom, the API" });
  });

  app.use("/wilders", wilderController);
  app.use("/techs", techController);

  app.listen(5100, () => {
    console.log("Server is running on http://localhost:5100");
  });
})();
