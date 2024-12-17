const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WilderSchema = new Schema({
  age: Number,
  author: String,
  city: String,
  languages: [String],
  training: [
    {
      year: Number,
      label: String,
    },
  ],
});



module.exports = mongoose.model("wilder", WilderSchema);
