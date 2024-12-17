const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TechSchema = new Schema({
  name: String,
  description: String,
  level: Number,
  linkedProject: [
    {
      date: Date,
      description: String,
    },
  ],
});

module.exports = mongoose.model("tech", TechSchema);
