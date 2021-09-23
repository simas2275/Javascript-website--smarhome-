const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const securitySchema = new Schema(
  {
    securitySwitch: {
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

const Security = mongoose.model("security", securitySchema);

module.exports = Security;
// module.exports = connectDB;
