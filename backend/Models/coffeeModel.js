const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const coffeeSchema = new Schema(
  {
    coffeeSwitch: {
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

const Coffee = mongoose.model("coffee", coffeeSchema);

module.exports = Coffee;
// module.exports = connectDB;
