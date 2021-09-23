const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plantSchema = new Schema(
  {
    plants: {
      type: Number,
      required: true,
    },
    plantsSwitch: {
      type: Boolean,
    },
    name: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: { createdAt: "date", updatedAt: "Update_Date" } }
);

const Plants = mongoose.model("plant", plantSchema);

module.exports = Plants;
// module.exports = connectDB;
