const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const petSchema = new Schema(
  {
    petFood: {
      type: Number,
    },
    petPortion: {
      type: Number,
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

const Pet = mongoose.model("pet", petSchema);

module.exports = Pet;
// module.exports = connectDB;
