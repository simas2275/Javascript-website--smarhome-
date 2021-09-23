const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const solarSchema = new Schema({
  inputPercent: {
    type: Number,
  },
  inputkWh: {
    type: Number,
  },
  outputPercent: {
    type: Number,
  },
  outputkWh: {
    type: Number,
  },
  name: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Solar = mongoose.model("solar", solarSchema);

module.exports = Solar;
// module.exports = connectDB;
