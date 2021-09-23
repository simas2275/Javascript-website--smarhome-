const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const energySchema = new Schema({
  usagekWh: {
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

const Energy = mongoose.model("energy", energySchema);

module.exports = Energy;
// module.exports = connectDB;
