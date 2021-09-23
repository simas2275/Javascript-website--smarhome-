const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gatesSchema = new Schema(
  {
    garageSwitch: {
      type: Boolean,
      required: true,
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

const Gate = mongoose.model("garage gate", gatesSchema);

module.exports = Gate;
// module.exports = connectDB;
