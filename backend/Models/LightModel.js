const mongoose = require("mongoose");
var moment = require("moment");
var now = moment();

const Schema = mongoose.Schema;

const lightSchema = new Schema(
  {
    light: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
    },
  },
  { timestamps: { createdAt: "date", updatedAt: "Update_Date" } }
);

const Light = mongoose.model("light", lightSchema);

module.exports = Light;

// module.exports = connectDB;
