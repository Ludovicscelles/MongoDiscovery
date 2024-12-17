const express = require("express");
const router = express.Router();
const WilderModel = require("./wilder.model");

router.get("/", async (req, res) => {
  const wilders = await WilderModel.find();
  res.status(200).json(wilders);
});

router.post("/", async (req, res) => {
  console.log("Got a post", req.body);
  const wilder = new WilderModel(...req.body);
  const result = await wilder.save();
  res.status(200).json({ message: "Hey, I saved a wilder", result });
});

module.exports = router;
